import { json, urlencoded } from "body-parser";
import express from "express";
import errorHandling from "./middlewares/errorHandling";
import dotenv from "dotenv";
import connectDB from "./config/connection";
import authRoute from "./routes/authRoute";
import session from "express-session";
import { CipherKey } from "crypto";
import passport from "passport";
import "./config/passport";

dotenv.config({ path: "./config.env" });

const app = express();

connectDB();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET as CipherKey | CipherKey[],
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoute);

app.get("/", (_req, res) => {
  res.send("Hello");
});

app.use(errorHandling);

export default app;
