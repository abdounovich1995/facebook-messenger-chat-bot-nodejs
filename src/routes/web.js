import express from "express";
import   homepageController from "../controllers/homepageController.js";
import  chatBotController from"../controllers/chatBotController.js";

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/", homepageController.getHomepage);
    router.get("/webhook", chatBotController.getWebhook);
    router.post("/webhook", chatBotController.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRoutes;