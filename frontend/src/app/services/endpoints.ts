const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined. Set it in frontend/.env");
}

const GAMES_URL = `${BASE_URL}api/games`;

export const ENDPOINTS = {
    EMAIL_URL: `${BASE_URL}api/email`,
    GAMES_URL,
    TRSS_URL: `${GAMES_URL}/trss`,
};