import express from "express";
import{ config } from "dotenv";
import paymentroute from "./routes/paymentroutes.js";

config({path: "./config/config.env" });

export const app = express();



app.use("/api", paymentroute);

