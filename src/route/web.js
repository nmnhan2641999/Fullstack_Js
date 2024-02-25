import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (rq, res) => {
        return res.send('hello nhan');
    });
    return app.use("/", router)
}

module.exports = initWebRoutes;