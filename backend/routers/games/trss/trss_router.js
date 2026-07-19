import { Router } from "express";
import { z } from "zod";
import { asyncHandler, HttpError } from "../../../middleware/error-handler.js";
import { searchRecords } from "./service.js";

export const trssRouter = Router();

const searchQuerySchema = z.object({
    q: z.string().trim().min(1).max(200),
});

trssRouter.get("/search", asyncHandler(async (req, res) => {
    const parsed = searchQuerySchema.safeParse(req.query);
    if (!parsed.success) {
        throw new HttpError(400, "Invalid search parameters.");
    }

    const results = await searchRecords(parsed.data.q);

    res.status(200).json(results);
}));