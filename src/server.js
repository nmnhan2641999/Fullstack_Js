import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require('dotenv').config();

let app = express();

//congif app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);


connectDB();

let port = process.env.PORT || 2604;

app.listen(port, () => {
    //callback
    console.log("chay port thanh cong " + port)
});