import { json, urlencoded } from "body-parser";
import express from "express";
import errorHandling from "./middlewares/errorHandling";
import dotenv from "dotenv";
import connectDB from "./config/connection";
import authRoute from "./routes/authRoute";

dotenv.config({ path: "./config.env" });

const app = express();

connectDB();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/v1/auth", authRoute);

app.get("/", (_req, res) => {
  res.send("Hello");
});

app.use(errorHandling);

export default app;
