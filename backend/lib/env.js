import { z } from "zod";
import "dotenv/config";

/* Email vars are optional so the server can boot without SMTP creds.
 * The email router returns 503 when they're missing. */
const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    PORT: z.coerce.number().int().positive().default(3001),
    FRONTEND_URL: z.string().url().optional(),
    EMAIL_ADDRESS_FROM: z.string().email().optional().or(z.literal("")).transform((v) => v || undefined),
    EMAIL_ADDRESS_TO: z.string().email().optional().or(z.literal("")).transform((v) => v || undefined),
    EMAIL_KEY: z.string().optional().or(z.literal("")).transform((v) => v || undefined),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid environment variables. Check backend/.env");
}

export const env = parsed.data;
export const isEmailConfigured = !!(env.EMAIL_ADDRESS_FROM && env.EMAIL_ADDRESS_TO && env.EMAIL_KEY);
