import { SONIC_BOOM } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query, vinylOnly, cdOnly) {
    const data = await baseScrape(
        vinylOnly,
        cdOnly,
        browser,
        query,
        SONIC_BOOM, // URL of Sonic Boom's website
        ".product-item__info-inner a", // Selects title to every search result, and links to the product page
        ".aspect-ratio img", // Selects image of record on product page
        ".price", // Selects price of record on product page
        ".flair-badge-layout > div"); // Selects availability of record on product page

    data.name = "Sonic Boom";
    data.img = data.img.replace("60x", "1660x");

    return data;
};