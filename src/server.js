import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser  from "cookie-parser";

//DB
import connectDB from "./db.js";

//Routes


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
//app.use(cookieParser());
connectDB();

app.use("/api/");

export default app;