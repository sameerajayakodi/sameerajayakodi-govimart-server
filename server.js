import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

import express from "express";
import connectDB from "./configs/db.js";

const app = express();
const port = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();

  const allowedOrigins = ["http://localhost:5173"];
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({ origin: allowedOrigins, credentials: true }));

  app.get("/", (req, res) => {
    res.send("API is Working");
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
startServer();
