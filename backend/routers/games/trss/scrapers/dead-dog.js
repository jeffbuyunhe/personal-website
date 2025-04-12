import { DEAD_DOG } from '../constants.js';
import { scrape as baseScrape } from './base.js';

export async function scrape(browser, query) {
    const data = await baseScrape(browser, query, DEAD_DOG, ".wrapper .product .info a",
        ".page-title h1", ".product-img img", ".price", ".availability span");

    data.name = "Dead Dog Records";
    return data;
};