require("dotenv").config();
import express from "express";
import  viewEngineJs from "./config/viewEngine.js";
import initWebRoute from "./routes/web.js";
import bodyParser from "body-parser";

let app = express();

// config view engine
viewEngineJs.viewEngine(app);

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init all web routes
initWebRoute(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`) ;
});