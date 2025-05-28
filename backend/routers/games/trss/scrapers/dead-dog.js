import { DEAD_DOG } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query, vinylOnly, cdOnly) {
    const data = await baseScrape(
        vinylOnly,
        cdOnly,
        browser,
        query,
        DEAD_DOG, // URL of Dead Dog's website
        ".product .info a", // Selects title to every search result, and links to the product page
        ".product-img img", // Selects image of record on product page
        ".price", // Selects price of record on product page
        ".availability span"); // Selects availability of record on product page

    data.name = "Dead Dog Records";
    return data;
};