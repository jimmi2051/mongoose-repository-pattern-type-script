import { AccessControl } from "accesscontrol";
import express = require("express");
import jwt = require("jsonwebtoken");
import { JWT_KEY } from "../../infastructures/Constants";
import UserService from "../../services/user";
import { detectResource } from "../../infastructures/Constants";
const grantList = [
  {
    role: "admin",
    resource: "book",
    action: "create:any",
    attributes: "*, !views",
  },
  { role: "admin", resource: "book", action: "read:any", attributes: "*" },
  {
    role: "admin",
    resource: "book",
    action: "update:any",
    attributes: "*, !views",
  },
  { role: "admin", resource: "book", action: "delete:any", attributes: "*" },

  {
    role: "basic",
    resource: "book",
    action: "create:own",
    attributes: "*, !rating, !views",
  },
  {
    role: "basic",
    resource: "book",
    action: "update:own",
    attributes: "*, !rating, !views",
  },
  { role: "basic", resource: "book", action: "delete:own", attributes: "*" },

  {
    role: "supervisor",
    resource: "book",
    action: "create:any",
    attributes: "*, !rating, !views",
  },
  { role: "supervisor", resource: "book", action: "read:any", attributes: "*" },
  {
    role: "supervisor",
    resource: "book",
    action: "update:any",
    attributes: "*, !rating, !views",
  },
  {
    role: "supervisor",
    resource: "book",
    action: "delete:own",
    attributes: "*",
  },
];
const ac = new AccessControl(grantList);

const detectAction = (role: string, method: string, resource: string): any => {
  method = method.toUpperCase();

  let permissionAny;
  let permissionOwn;
  switch (method) {
    case "GET":
      permissionAny = ac.can(role).readAny(resource);
      permissionOwn = ac.can(role).readOwn(resource);
      console.log(1);
      break;
    case "POST":
      permissionAny = ac.can(role).createAny(resource);
      permissionOwn = ac.can(role).createOwn(resource);
      console.log(2);
      break;
    case "PUT":
      permissionAny = ac.can(role).updateAny(resource);
      permissionOwn = ac.can(role).updateOwn(resource);
      console.log(3);
      break;
    case "DELETE":
      permissionAny = ac.can(role).deleteAny(resource);
      permissionOwn = ac.can(role).deleteOwn(resource);
      console.log(4);
      break;

    default:
      break;
  }
  console.log("==>", permissionAny.granted);
  console.log("==>", permissionOwn.granted);
  if (permissionAny.granted || permissionOwn.granted) {
    return true;
  }
  return false;
};

class RoleMiddleware {
  public base(req: any, res: express.Response, next): any {
    const path = req.route.path;
    const method = req.method;
    const resource = detectResource(path, method);
    const { user } = req;
    if (resource === null) {
      return res.status(403).json({
        status: false,
        message: "not found resource.",
      });
    } else {
      //    const permissionAny = ac.can(user.role).readOwn(resource)
      const havePermission = detectAction(user.role, method, resource);

      if (havePermission) {
        console.log("1111");
        next();
      } else {
        return res.status(403).json({
          status: false,
          message: "You don't have permission.",
        });
      }
    }
  }
}
export default RoleMiddleware;
