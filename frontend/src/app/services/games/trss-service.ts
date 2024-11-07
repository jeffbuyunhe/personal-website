import { ENDPOINTS } from "../endpoints";

const searchRecord = (query: string) => {
    return fetch(`${ENDPOINTS.TRSS_URL}/search?q=${encodeURIComponent(query)}`, {
        method: "GET",
    }).then((res) => res.json())
        .catch(() => { return { error: "Could not retrieve records." } });
};

const trssService = { searchRecord };

export default trssService;