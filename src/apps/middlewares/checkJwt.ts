import express = require("express");
import moment = require("moment");
import { getActualRequestDurationInMilliseconds } from "../../infastructures/Helpers";
import chalk = require("chalk");
import jwt = require("jsonwebtoken");
import { JWT_KEY } from "../../infastructures/Constants";
import UserService from "../../services/user";
// import logger from "../../infastructures/Logger";
class AuthMiddleware {
  public base(req: any, res: express.Response, next): any {
    let token: any =
      req.headers["x-access-token"] || req.headers["authorization"];
    if (!token) {
      res.status(401);
      res.json({
        success: false,
        message: "Bearer not found.",
      });
      return res;
    } else {
      // Express headers are auto converted to lowercase
      if (token.startsWith("Bearer ")) {
        // Remove Bearer from string
        token = token.slice(7, token.length).trimLeft();
      }
      if (token) {
        jwt.verify(token, JWT_KEY, (err, decoded) => {
          if (err) {
            return res.json({
              success: false,
              message: "Token is not valid",
            });
          } else {
            req.decoded = decoded;
            const { userId } = decoded;
            const _id = userId;
            const userService = new UserService();
            userService.findById(_id, (error, result) => {
              if (error) {
                return res.json({
                  success: false,
                  message: "User is not exist",
                });
              } else {
                // next();
                console.log("result ==>", result);
              }
            });
            next();
          }
        });
      } else {
        return res.json({
          success: false,
          message: "Require bearer token",
        });
      }
    }
  }
}
export default AuthMiddleware;
