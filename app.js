import express from "express";
import userRouter from "./Routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

config({
  path: "./data/config.env",
});

export const app = express();
//using middlewares
app.use(express.json());
app.use("/users", userRouter);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello ");
});
