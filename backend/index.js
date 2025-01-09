import express from "express";
import dontenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";
import cors from "cors";

dontenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5002;

const connectDB = async () => {
  try {
    await mongoose.connect(URL).then(console.log("Mongodb is connected!"));
  } catch (error) {
    console.log(error);
  }
};

connectDB();

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

app.get("/", (req, res) => {
  return res.send("HEllo from the Server!");
});

server.listen(PORT, console.log(`Server is Started at port : ${PORT}`));
