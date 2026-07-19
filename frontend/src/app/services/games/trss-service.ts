import { ENDPOINTS } from "@/app/services/endpoints";
import { Result } from "@/app/arcade/trss/types";

const searchRecord = (query: string): Promise<Result[]> => {
    const params = new URLSearchParams({ q: query });
    return fetch(`${ENDPOINTS.TRSS_URL}/search?${params.toString()}`, {
        method: "GET",
    })
        .then((res) => res.json())
        .catch(() => [] as Result[]);
};

const trssService = { searchRecord };

export default trssService;