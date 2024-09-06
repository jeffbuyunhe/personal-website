import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import { emailRouter } from './routers/email_router.js';
import "dotenv/config";

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
};

app.use(cors());

app.use("/api/email", emailRouter);

app.get(["/", "/api"], (req, res) => res.status(200).send("Express for personal website."));

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})