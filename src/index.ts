import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { errorHandler } from "./error";
import { connectDB } from "./db";
import router from "./router";

dotenv.config();

const PORT = process.env.PORT ?? 5001;

const app = express();

app.use(
  cors({
    origin: 'https://meme-web-production.up.railway.app',
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Autorization"],
  })
);

connectDB();

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
