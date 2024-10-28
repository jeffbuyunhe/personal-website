import { Router } from "express";
import NodeMailer from 'nodemailer';
import 'dotenv/config';

export const emailRouter = Router();

emailRouter.post("/", async (req, res) => {
    try {
        const transport = NodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_ADDRESS_FROM,
                pass: process.env.EMAIL_KEY,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_ADDRESS_FROM,
            to: process.env.EMAIL_ADDRESS_TO,
            subject: `${req.body.name} - from personal website`,
            text: `From: ${req.body.email}\n\n${req.body.message}`,
        };

        await transport.sendMail(mailOptions);
        return res.status(200).json({ success: "Email sent successfully." });
    }
    catch (err) {
        return res.status(500).json({ error: "Internal Server Error, Message could not be sent." });
    }
});