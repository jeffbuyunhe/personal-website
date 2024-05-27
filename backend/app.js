import express from 'express';
import bodyParser from "body-parser";
import { emailRouter } from './routers/email_router.js';

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api/email", emailRouter);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})