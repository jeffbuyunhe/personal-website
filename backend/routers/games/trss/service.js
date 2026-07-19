import puppeteer from "puppeteer";
import { STORES } from "./stores/index.js";
import { scrape } from "./scrapers/base.js";

/**
 * Search all configured record stores in parallel.
 *
 * @param {string} query
 * @returns {Promise<object[]>}
 */
export async function searchRecords(query) {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    try {
        return await Promise.all(
            STORES.map((store) => scrape(browser, store, query)),
        );
    } finally {
        await browser.close().catch(() => {});
    }
}
