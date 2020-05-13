import express = require("express");
import BookService from "../../services/book";
import IBaseController from "./interfaces/base/BaseController";
import IBook from "../../entities/models/interfaces/IBook";

class BookController implements IBaseController<BookService> {
  public create(req: express.Request, res: express.Response): void {
    try {
      const hero: IBook = <IBook>req.body;
      const bookService = new BookService();
      bookService.create(hero, (error, result) => {
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
      const bookService = new BookService();
      bookService.delete(_id, (error, result) => {
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
      const bookService = new BookService();
      bookService.findById(_id, (error, result) => {
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
      const bookService = new BookService();
      bookService.retrieve((error, result) => {
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
  public update(req: express.Request, res: express.Response): void {
    try {
      const hero: IBook = <IBook>req.body;
      const _id: string = req.params._id;
      const bookService = new BookService();
      bookService.update(_id, hero, (error, result) => {
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
export default BookController;
