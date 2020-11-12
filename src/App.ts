import express = require("express");
import * as bodyParser from "body-parser";
import routes from "./apps/routes";
import cors from "cors";
import BaseMiddleware from "./apps/middlewares/base";
import PermissionSchema from "./entities/schemas/Permission";
import RoleSchema from "./entities/schemas/Role";

const permissions = [
  {
    action: "create",
    resource: "book",
    enabled: true,
  },
  {
    action: "update",
    resource: "book",
    enabled: true,
  },
  {
    action: "get",
    resource: "book",
    enabled: true,
  },
  {
    action: "delete",
    resource: "book",
    enabled: true,
  },
];
const roles = [
  {
    enabled: true,
    name: "user",
    type: "normal",
    permissions: [],
  },
  {
    enabled: true,
    name: "admin",
    type: "admin",
    permissions: [],
  },
  {
    enabled: true,
    name: "superadmin",
    type: "superadmin",
    permissions: [],
  },
];
class App {
  public app;

  constructor() {
    this.app = express();
    this.config();
  }

  private async config(): Promise<any> {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(new BaseMiddleware().base);
    // add routes
    this.app.use("/api/v1", routes);
    // Init Role & Permission Basic
    const listPermissionInit = [];
    for (const permission of permissions) {
      const instancePermission = await PermissionSchema.findOne(permission);
      if (instancePermission) {
        listPermissionInit.push(instancePermission);
      } else {
        const result = await PermissionSchema.create(permission);
        listPermissionInit.push(result);
      }
    }
    const listRoleInit = [];
    for (const role of roles) {
      role.permissions = [...listPermissionInit];
      const instanceRole = await RoleSchema.findOne(role);
      if (instanceRole) {
        listRoleInit.push(instanceRole);
      } else {
        const result = await RoleSchema.create(role);
        listRoleInit.push(result);
      }
    }
  }
}

export default new App().app;
