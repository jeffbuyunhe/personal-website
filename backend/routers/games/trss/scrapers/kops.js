import { KOPS } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query, vinylOnly, cdOnly) {

    /* Kops only sells records */
    if (cdOnly) {
        return null;
    }

    const data = await baseScrape(
        vinylOnly,
        cdOnly,
        browser,
        query,
        KOPS, // URL of Kop's website
        ".prod-card .text-base a", // Selects title to every search result, and links to the product page
        ".img-mag img", // Selects image of record on product page
        ".product__price", // Selects price of record on product page
        ".in-stock"); // Selects availability of record on product page

    data.name = "Kops Records";
    return data;
}; 