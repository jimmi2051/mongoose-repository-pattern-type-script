import express = require("express");
import UserController from "../controllers/user";

const router = express.Router();
class UserRoutes {
  constructor() {
    this._userController = new UserController();
  }
  private _userController: UserController;
  get routes() {
    const controller = this._userController;
    router.post("/signup", controller.signUp);
    router.post("/signin", controller.signIn);
    router.get("/users", controller.retrieve);
    router.post("/users", controller.create);
    router.put("/users/:_id", controller.update);
    router.get("/users/:_id", controller.findById);
    router.delete("/users/:_id", controller.delete);
    return router;
  }
}

Object.seal(UserRoutes);
export default UserRoutes;
