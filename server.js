import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

import express from "express";
import connectDB from "./configs/db.js";

const app = express();
const port = process.env.PORT || 4000;

// Await inside top-level async function or use IIFE
const startServer = async () => {
  await connectDB();

  // Allow multiple origins
  const allowedOrigins = ["http://localhost:5173"];

  // Middleware configuration
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({ origin: allowedOrigins, credentials: true }));

  // Test route
  app.get("/", (req, res) => {
    res.send("API is Working");
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

// Call the async function to start the server
startServer();
