import express = require("express");
import * as bodyParser from "body-parser";
import routes from "./apps/routes";
import cors from "cors";
import BaseMiddleware from "./apps/middlewares/base";
class App {
  public app;

  constructor() {
    // console.log("DEBUG ===>", APP_ID);
    this.app = express();
    // connectDB();
    // MyContext.connect();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(new BaseMiddleware().base);
    // add routes
    this.app.use("/api/v1", routes);
  }
}

export default new App().app;
