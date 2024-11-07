const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const GAMES_URL = `${BASE_URL}api/games`;

export const ENDPOINTS = {
    EMAIL_URL: `${BASE_URL}api/email`,
    GAMES_URL: `${BASE_URL}api/games`,
    TRSS_URL: `${GAMES_URL}/trss`
}