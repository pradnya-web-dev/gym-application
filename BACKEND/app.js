import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide the relevant information"
        });
    }
    try {
        console.log("Sending email with the following details:", { name, email, message });
        await sendEmail({
            email: "pradnyapawar2817@gmail.com", // The recipient email
            subject: "Gym Website Content",
            message: `Message from ${name} (${email}): ${message}`, // Include sender details in the message
        });
        res.status(200).json({
            success: true,
            message: "Message sent successfully!"
        });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error for gym website!"
        });
    }
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
