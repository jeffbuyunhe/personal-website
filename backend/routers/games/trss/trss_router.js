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
        const browser = await puppeteer.launch();

        const result = await Promise.all(
            [popMusicScrape(browser, query),
            sonicBoomScrape(browser, query),
            deadDogScrape(browser, query),
            kopsScrape(browser, query)]).then(res => {
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