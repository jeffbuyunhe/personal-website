import { Router } from "express";
import puppeteer from "puppeteer";
import { scrape as popMusicScrape } from "./scrapers/pop-music.js";
import { scrape as sonicBoomScrape } from "./scrapers/sonic-boom.js";
import { scrape as deadDogScrape } from "./scrapers/dead-dog.js";
import { scrape as kopsScrape } from "./scrapers/kops.js";


export const trssRouter = Router();

trssRouter.get("/search", async (req, res) => {
    try {
        const query = req.query.q;
        const vinylOnly = req.query.vinylOnly === 'true';
        const cdOnly = req.query.cdOnly === 'true';

        const browser = await puppeteer.launch();

        const result = await Promise.all(
            [popMusicScrape(browser, query, vinylOnly, cdOnly),
            sonicBoomScrape(browser, query, vinylOnly, cdOnly),
            deadDogScrape(browser, query, vinylOnly, cdOnly),
            kopsScrape(browser, query, vinylOnly, cdOnly)]).then(res => {
                const result = [];
                result.push(res[0]);
                result.push(res[1]);
                result.push(res[2]);
                result.push(res[3]);
                return result;
            });

        return res.status(200).send(result);
    }
    catch (err) {
        return res.status(500).json({ error: "Could not retrieve record data." });
    }
});