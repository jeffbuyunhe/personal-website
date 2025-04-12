import { POP_MUSIC } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query) {
    const data = await baseScrape(browser, query, POP_MUSIC, ".wrapper .product .info a",
        ".page-title h1", ".product-img img", ".price", ".availability span");

    data.name = "Pop Music";
    return data;
};