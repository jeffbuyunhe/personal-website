import { CachedSearch, Result } from "@/app/arcade/trss/types";

const STORAGE_KEY = "recordSearch";

export function saveSearchToSession(query: string, results: Result[]) {
    if (typeof window === "undefined") return;
    const payload: CachedSearch = { query, results };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function getSearchFromSession(): CachedSearch | null {
    if (typeof window === "undefined") return null;
    const cached = sessionStorage.getItem(STORAGE_KEY);
    if (!cached) return null;

    try {
        return JSON.parse(cached) as CachedSearch;
    } catch {
        return null;
    }
}