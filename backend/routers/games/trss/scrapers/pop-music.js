import { POP_MUSIC } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query, vinylOnly, cdOnly) {

    /* Pop Music only sells records */
    if (cdOnly) {
        return null;
    }

    const data = await baseScrape(
        vinylOnly,
        cdOnly,
        browser,
        query,
        POP_MUSIC, // URL of Pop Music's website
        ".product .info a", // Selects title to every search result, and links to the product page
        ".product-img img", // Selects image of record on product page
        ".price", // Selects price of record on product page
        ".availability span"); // Selects availability of record on product page

    data.name = "Pop Music";
    return data;
};