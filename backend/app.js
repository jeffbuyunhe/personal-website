import express from "express";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { env } from "./lib/env.js";
import { logger } from "./lib/logger.js";
import { errorHandler } from "./middleware/error-handler.js";
import { emailRouter } from "./routers/email_router.js";
import { trssRouter } from "./routers/games/trss/trss_router.js";

export function createApp() {
    const app = express();

    // Trust one proxy hop (Caddy) so express-rate-limit uses the real client IP
    // from X-Forwarded-For rather than the proxy's IP.
    app.set("trust proxy", 1);

    app.use(pinoHttp({ logger }));
    app.use(helmet());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json({ limit: "1mb" }));

    const corsOptions = env.FRONTEND_URL
        ? { origin: env.FRONTEND_URL.replace(/\/$/, ""), optionsSuccessStatus: 200 }
        : undefined;
    app.use(cors(corsOptions));

    app.get("/api/health", (req, res) => {
        res.status(200).json({ status: "ok", uptime: process.uptime() });
    });

    app.use("/api/email", emailRouter);
    app.use("/api/games/trss", trssRouter);

    app.get(["/", "/api"], (req, res) => res.status(200).send("Express for personal website."));

    app.use(errorHandler);

    return app;
}

export const app = createApp();
