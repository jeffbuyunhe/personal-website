import { logger } from "../lib/logger.js";

/* Central Express error handler. Logs at error only for unexpected failures. */
export function errorHandler(err, req, res, _next) {
    const status = err.status ?? 500;
    if (status >= 500 && !err.publicMessage) {
        logger.error({ err, method: req.method, url: req.originalUrl }, "unhandled server error");
    } else if (status >= 500) {
        logger.warn({ method: req.method, url: req.originalUrl, msg: err.publicMessage }, "handled server error");
    }
    res.status(status).json({ error: err.publicMessage ?? err.message ?? "Internal Server Error" });
}

/* Wraps async route handlers so thrown errors reach errorHandler. */
export function asyncHandler(fn) {
    return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

export class HttpError extends Error {
    constructor(status, publicMessage) {
        super(publicMessage);
        this.status = status;
        this.publicMessage = publicMessage;
    }
}
