import { describe, expect, it, vi, beforeEach } from "vitest";
import request from "supertest";

/* Point env at safe defaults before importing the app. */
process.env.NODE_ENV = "test";
process.env.PORT = "3001";
process.env.EMAIL_ADDRESS_FROM = "from@example.com";
process.env.EMAIL_ADDRESS_TO = "to@example.com";
process.env.EMAIL_KEY = "test-key";

const sendMailMock = vi.fn();

vi.mock("nodemailer", () => ({
    default: {
        createTransport: () => ({ sendMail: sendMailMock }),
    },
}));

const { app } = await import("../app.js");

describe("app", () => {
    beforeEach(() => {
        sendMailMock.mockReset();
    });

    it("GET /api/health returns ok", async () => {
        const res = await request(app).get("/api/health");
        expect(res.status).toBe(200);
        expect(res.body.status).toBe("ok");
    });

    it("GET /api/games/trss/search rejects missing q", async () => {
        const res = await request(app).get("/api/games/trss/search");
        expect(res.status).toBe(400);
        expect(res.body.error).toMatch(/Invalid/);
    });

    it("POST /api/email validates required fields", async () => {
        const res = await request(app)
            .post("/api/email")
            .send({ name: "", email: "not-an-email", message: "" });
        expect(res.status).toBe(400);
    });

    it("POST /api/email strips CR/LF from name to prevent header injection", async () => {
        sendMailMock.mockResolvedValueOnce({ accepted: ["to@example.com"] });
        const res = await request(app)
            .post("/api/email")
            .send({
                name: "Alice\r\nBcc: attacker@evil.com",
                email: "alice@example.com",
                message: "hello",
            });

        expect(res.status).toBe(200);
        expect(sendMailMock).toHaveBeenCalledOnce();
        const subject = sendMailMock.mock.calls[0][0].subject;
        /* CR/LF must be stripped so the payload can't inject additional SMTP headers. */
        expect(subject).not.toMatch(/[\r\n]/);
    });
});
