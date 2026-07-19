import { Router } from "express";
import NodeMailer from "nodemailer";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { env, isEmailConfigured } from "../lib/env.js";
import { asyncHandler, HttpError } from "../middleware/error-handler.js";

export const emailRouter = Router();

/* Single transporter reused across requests (created only if email is configured). */
const transporter = isEmailConfigured
    ? NodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: env.EMAIL_ADDRESS_FROM,
            pass: env.EMAIL_KEY,
        },
    })
    : null;

const emailLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests, please try again shortly." },
});

const emailSchema = z.object({
    name: z.string().trim().min(1).max(200),
    email: z.string().trim().email().max(320),
    message: z.string().trim().min(1).max(5000),
});

/* Strip CR/LF to prevent SMTP header injection via the subject line. */
function sanitizeHeader(value) {
    return value.replace(/[\r\n]+/g, " ").trim();
}

emailRouter.post("/", emailLimiter, asyncHandler(async (req, res) => {
    if (!transporter) {
        throw new HttpError(503, "Email service is not configured on this server.");
    }

    const parsed = emailSchema.safeParse(req.body);
    if (!parsed.success) {
        throw new HttpError(400, "Invalid request body.");
    }
    const { name, email, message } = parsed.data;

    try {
        await transporter.sendMail({
            from: env.EMAIL_ADDRESS_FROM,
            to: env.EMAIL_ADDRESS_TO,
            replyTo: email,
            subject: `${sanitizeHeader(name)} - from personal website`,
            text: `From: ${email}\n\n${message}`,
        });
        return res.status(200).json({ success: "Email sent successfully." });
    } catch (err) {
        console.error("[email] send failed:", err);
        throw new HttpError(500, "Internal Server Error, Message could not be sent.");
    }
}));