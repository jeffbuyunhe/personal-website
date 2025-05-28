import { ENDPOINTS } from "@/app/services/endpoints";

const searchRecord = (query: string, vinylOnly: boolean, cdOnly: boolean) => {
    let url = `${ENDPOINTS.TRSS_URL}/search?q=${encodeURIComponent(query)}`;
    if (vinylOnly) {
        url += '&vinylOnly=true';
    }
    else if (cdOnly) {
        url += '&cdOnly=true';
    }
    return fetch(url, {
        method: "GET",
    }).then((res) => res.json())
        .catch(() => { return { error: "Could not retrieve records." } });
};

const trssService = { searchRecord };

export default trssService;