import { beforeEach, describe, expect, it } from "vitest";
import { getSearchFromSession, saveSearchToSession } from "./search-storage";

describe("search-storage", () => {
    beforeEach(() => {
        sessionStorage.clear();
    });

    it("round-trips a saved search", () => {
        saveSearchToSession("abbey road", [
            { name: "Test Store", url: "https://example.com" },
        ]);
        const cached = getSearchFromSession();

        expect(cached?.query).toBe("abbey road");
        expect(cached?.results).toHaveLength(1);
    });

    it("returns null when storage is empty", () => {
        expect(getSearchFromSession()).toBeNull();
    });

    it("returns null on corrupt JSON without throwing", () => {
        sessionStorage.setItem("recordSearch", "{not valid");
        expect(getSearchFromSession()).toBeNull();
    });
});
