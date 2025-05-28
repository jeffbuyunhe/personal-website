export async function scrape(
    vinylOnly,
    cdOnly,
    browser,
    query,
    baseUrl,
    productURLSelector,
    productImgSelector,
    productPriceSelector,
    productAvailabilitySelector) {

    const page = await browser.newPage();
    const url = `${baseUrl}${encodeURIComponent(query)}`;
    await page.goto(url);

    try {
        const searchResults = await page.$$eval(productURLSelector, results =>
            results.map(e => [e.textContent, e.href]));

        const filteredSearchResults = filterMusic(searchResults, vinylOnly, cdOnly);

        await page.goto(filteredSearchResults[0][1]);

        try {
            const img = await page.$eval(productImgSelector, e => e.src);
            const price = await page.$eval(productPriceSelector, e => e.textContent);
            const availability = await page.$eval(productAvailabilitySelector, e => e.textContent);

            await page.close();

            return {
                title: filteredSearchResults[0][0].trim(),
                img: img.trim(),
                price: price.trim(),
                availability: availability.trim(),
                url: url,
                recordUrl: filteredSearchResults[0][1]
            }
        }
        catch (e) {
            await page.close();
            return {
                url: url,
                error: "Could not get product details"
            };
        }
    }
    catch (e) {
        await page.close();
        return {
            url: url,
            error: "No products found"
        };
    }
};

function filterMusic(searchResults, vinylOnly, cdOnly) {
    if (!vinylOnly && !cdOnly) {
        return searchResults;
    }
    const filteredResults = [];
    for (let i = 0; i < searchResults.length; i++) {
        if (vinylOnly && !/\bcd\b/i.test(searchResults[i][0]) && !/\bcassette\b/i.test(searchResults[i][0])) {
            filteredResults.push(searchResults[i]);
        }
        if (cdOnly && /\bcd\b/i.test(searchResults[i][0])) {
            filteredResults.push(searchResults[i]);
        }
    }
    return filteredResults;
}