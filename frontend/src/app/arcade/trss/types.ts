export interface Result {
    name: string;
    url: string;
    title?: string;
    img?: string;
    price?: string;
    availability?: string;
    recordUrl?: string;
    error?: string;
}

export interface CachedSearch {
    query: string;
    results: Result[];
}