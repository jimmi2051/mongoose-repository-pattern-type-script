import express = require("express");
import BookController from "../controllers/book";
import RoleMiddleware from "../middlewares/role";
const router = express.Router();
class BookRoutes {
  constructor() {
    this._bookController = new BookController();
  }
  private _bookController: BookController;
  // private Auth = new AuthMiddleware().base;
  get routes() {
    const controller = this._bookController;
    router.get("/books", new RoleMiddleware().base, controller.retrieve);
    router.post("/books", controller.create);
    router.put("/books/:_id", new RoleMiddleware().base, controller.update);
    router.get("/books/:_id", controller.findById);
    router.delete("/books/:_id", controller.delete);

    return router;
  }
}

Object.seal(BookRoutes);
export default BookRoutes;
