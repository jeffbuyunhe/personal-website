import { describe, expect, it, vi } from "vitest";
import { scrape } from "../routers/games/trss/scrapers/base.js";

const buildStore = (overrides = {}) => ({
    name: "Test Store",
    baseUrl: "https://example.com/search?q=",
    selectors: {
        productUrl: ".a",
        productImg: ".b",
        productPrice: ".c",
        productAvailability: ".d",
    },
    ...overrides,
});

function makeBrowser({ links, product }) {
    const page = {
        goto: vi.fn().mockResolvedValue(undefined),
        $$eval: vi.fn().mockResolvedValue(links),
        $eval: vi.fn().mockImplementation((sel) => {
            if (sel === ".b") return Promise.resolve(product.img);
            if (sel === ".c") return Promise.resolve(product.price);
            if (sel === ".d") return Promise.resolve(product.availability);
            return Promise.resolve("");
        }),
        close: vi.fn().mockResolvedValue(undefined),
    };
    return { browser: { newPage: vi.fn().mockResolvedValue(page) }, page };
}

describe("scrapers/base", () => {
    it("returns the first search result", async () => {
        const store = buildStore();
        const { browser, page } = makeBrowser({
            links: [
                ["Abbey Road (Vinyl)", "https://example.com/a-vinyl"],
                ["Abbey Road (CD)", "https://example.com/a-cd"],
            ],
            product: { img: "https://cdn/img.jpg", price: "$25", availability: "In stock" },
        });

        const result = await scrape(browser, store, "abbey road");

        expect(result.title).toBe("Abbey Road (Vinyl)");
        expect(result.recordUrl).toBe("https://example.com/a-vinyl");
        expect(page.close).toHaveBeenCalled();
    });

    it("applies the store transform hook", async () => {
        const store = buildStore({
            transform: (r) => ({ ...r, img: r.img.replace("60x", "1660x") }),
        });
        const { browser } = makeBrowser({
            links: [["A", "https://example.com/a"]],
            product: { img: "https://cdn/60x/img.jpg", price: "$1", availability: "In stock" },
        });

        const result = await scrape(browser, store, "a");
        expect(result.img).toBe("https://cdn/1660x/img.jpg");
    });

    it("returns no-products error when the search yields nothing", async () => {
        const store = buildStore();
        const { browser, page } = makeBrowser({ links: [], product: {} });

        const result = await scrape(browser, store, "nothing");

        expect(result.error).toMatch(/no products/i);
        expect(page.close).toHaveBeenCalled();
    });
});
