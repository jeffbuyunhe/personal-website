import pino from "pino";
import { env } from "./env.js";

const level = env.NODE_ENV === "test"
    ? "silent"
    : env.NODE_ENV === "production"
        ? "info"
        : "debug";

export const logger = pino({
    level,
    /* Redact anything that looks like an SMTP secret in logs. */
    redact: {
        paths: ["req.headers.authorization", "*.EMAIL_KEY"],
        remove: true,
    },
});
