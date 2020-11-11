import express = require("express");
import * as bodyParser from "body-parser";
import routes from "./apps/routes";
import cors from "cors";
import BaseMiddleware from "./apps/middlewares/base";
import PermissionSchema from "./entities/schemas/Permission";
import RoleSchema from "./entities/schemas/Role";
class App {
  public app;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(new BaseMiddleware().base);
    // add routes
    this.app.use("/api/v1", routes);
    // PermissionSchema.create(
    //   { action: "create", resource: "book", enabled: true },
    //   function (err, small) {
    //     if (err) console.log("error ==>", err);
    //     // saved!
    //     console.log("haha ==>", small);
    //   }
    // );
    RoleSchema.create(
      {
        enabled: true,
        name: "user",
        type: "normal",
        permissions: [
          {
            _id: "5fac1cbc376c1926ae47ba82",
            action: "create",
            resource: "book",
            enabled: true,
            __v: 0,
          },
        ],
      },
      function (err, small) {
        if (err) console.log("error ==>", err);
        // saved!
        console.log("haha ==>", small);
      }
    );
  }
}

export default new App().app;
