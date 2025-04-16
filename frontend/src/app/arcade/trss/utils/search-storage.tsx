import { Result } from "@/app/arcade/trss/types";

const STORAGE_KEY = "recordSearch";

export function saveSearchToSession(query: string, results: Result[]) {
    if (typeof window === "undefined") return;
    const payload = JSON.stringify({ query, results });
    sessionStorage.setItem(STORAGE_KEY, payload);
}

export function getSearchFromSession(): { query: string; results: Result[] } | null {
    if (typeof window === "undefined") return null;
    const searchResults = sessionStorage.getItem(STORAGE_KEY);
    if (!searchResults) return null;

    try {
        return JSON.parse(searchResults);
    } catch {
        return null;
    }
}