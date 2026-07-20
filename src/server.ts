import dotenv from "dotenv"
dotenv.config();

import express, { response } from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import angularRouter from './routers/angular.router';
import { dbConnect } from "./configs/database.config";
import orderRouter from "./routers/order.router";
import path from "path";
dbConnect();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist/frontend/browser')));

app.use(cors({
    credentials: true,
    origin: ["https://food-store-ver.vercel.app"]
}));


app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter);
app.use("/api/orders",orderRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/frontend/browser/index.html'));
});


const port = 5000;
app.listen(port,() => {
    console.log("WebSite Served On http://localhost:"+port);
});


export default app;