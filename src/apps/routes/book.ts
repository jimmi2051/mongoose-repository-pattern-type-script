import express = require("express");
import BookController from "../controllers/book";

const router = express.Router();
class BookRoutes {
  constructor() {
    this._bookController = new BookController();
  }
  private _bookController: BookController;
  get routes() {
    const controller = this._bookController;
    router.get("/books", controller.retrieve);
    router.post("/books", controller.create);
    router.put("/books/:_id", controller.update);
    router.get("/books/:_id", controller.findById);
    router.delete("/books/:_id", controller.delete);

    return router;
  }
}

Object.seal(BookRoutes);
export default BookRoutes;
