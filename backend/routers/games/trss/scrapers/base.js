import { logger } from "../../../../lib/logger.js";

/**
 * Runs a search against a record-store website using per-store selectors.
 * Returns a normalized result, or `{ name, url, error }` if anything fails.
 *
 * @param {import("puppeteer").Browser} browser
 * @param {object} store   Store config (see stores/*.js).
 * @param {string} query   User search string (already validated).
 */
export async function scrape(browser, store, query) {
    const url = `${store.baseUrl}${encodeURIComponent(query)}`;

    const page = await browser.newPage();
    try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20_000 });

        const searchResults = await page.$$eval(store.selectors.productUrl, (results) =>
            results.map((e) => [e.textContent, e.href]),
        );

        if (searchResults.length === 0) {
            return { name: store.name, url, error: "No products found." };
        }

        const [firstTitle, firstHref] = searchResults[0];
        await page.goto(firstHref, { waitUntil: "domcontentloaded", timeout: 20_000 });

        const img = await page.$eval(store.selectors.productImg, (e) => e.src).catch(() => "");
        const price = await page.$eval(store.selectors.productPrice, (e) => e.textContent).catch(() => "");
        /* Availability selector is optional — some stores omit it when in stock. */
        const availability = await page.$eval(store.selectors.productAvailability, (e) => e.textContent).catch(() => "");

        const result = {
            name: store.name,
            url,
            title: firstTitle.trim(),
            img: img.trim(),
            price: price.trim(),
            availability: availability.trim(),
            recordUrl: firstHref,
        };

        return store.transform ? store.transform(result) : result;
    } catch (err) {
        logger.warn({ store: store.name, query, err }, "scrape failed");
        return { name: store.name, url, error: "Could not get product details" };
    } finally {
        await page.close().catch(() => {});
    }
}
