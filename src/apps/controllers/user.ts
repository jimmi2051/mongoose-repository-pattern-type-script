import express = require("express");
import UserService from "../../services/user";
import IBaseController from "./interfaces/base/BaseController";
import IUser from "../../entities/models/interfaces/IUser";

class UserController implements IBaseController<UserService> {
  public create(req: express.Request, res: express.Response): void {
    try {
      const hero: IUser = <IUser>req.body;
      const userService = new UserService();
      userService.create(hero, (error, result) => {
        if (error) {
          res.send({ error: "error" });
        } else {
          res.send({ success: "success" });
        }
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
  public delete(req: express.Request, res: express.Response): void {
    try {
      const _id: string = req.params._id;
      const userService = new UserService();
      userService.delete(_id, (error, result) => {
        if (error) {
          res.send({ error: "error" });
        } else {
          res.send({ success: "success" });
        }
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }

  public findById(req: express.Request, res: express.Response): void {
    try {
      const _id: string = req.params._id;
      const userService = new UserService();
      userService.findById(_id, (error, result) => {
        if (error) {
          res.send({ error: "error" });
        } else {
          res.send(result);
        }
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
  public retrieve(req: express.Request, res: express.Response): void {
    try {
      const userService = new UserService();
      userService.retrieve((error, result) => {
        if (error) {
          res.send({ error: "error" });
        } else {
          res.send(result);
        }
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }

  public signIn(req: express.Request, res: express.Response): void {
    try {
      const user: IUser = <IUser>req.body;
      const userService = new UserService();
      userService.signIn(user, (error, result) => {
        console.log("error", error);
        console.log("result", result);
        if (error) {
          res.statusCode = 500;
          res.send(error);
        } else {
          if (result.status) {
            res.status(200);
            res.send({ ...result });
          } else {
            res.status(401);
            res.send({
              error: `Sign in failed. ${result.message}`,
            });
          }
        }
      });
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send({ error: "error in your request" });
    }
  }
  public signUp(req: express.Request, res: express.Response): void {
    try {
      const user: IUser = <IUser>req.body;
      const userService = new UserService();
      userService.signUp(user, (error, result) => {
        if (error) {
          res.statusCode = 500;
          res.send(error);
        } else {
          if (result._id) {
            res.send({
              success: `Sign up success.`,
            });
          } else {
            res.send({
              error: `Sign up failed. ${result}`,
            });
          }
        }
      });
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send({ error: "error in your request" });
    }
  }
  public update(req: express.Request, res: express.Response): void {
    try {
      const hero: IUser = <IUser>req.body;
      const _id: string = req.params._id;
      const userService = new UserService();
      userService.update(_id, hero, (error, result) => {
        if (error) {
          res.send({ error: "error" });
        } else {
          res.send({ success: "success" });
        }
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
}
export default UserController;
