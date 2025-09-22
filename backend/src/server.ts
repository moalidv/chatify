import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.ts";
import messageRoutes from "./routes/message.route.ts";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(port, () => console.log("server is running on server ", port));
