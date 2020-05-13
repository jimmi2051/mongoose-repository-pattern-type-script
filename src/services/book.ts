import BookRepository from "../repositories/BookRepository";

import IBookModel from "../entities/models/interfaces/IBook";

class BookService {
  constructor() {
    this._bookRepository = new BookRepository();
  }
  private _bookRepository: BookRepository;

  public create(item: IBookModel, callback: (error: any, result: any) => void) {
    this._bookRepository.create(item, callback);
  }

  public delete(_id: string, callback: (error: any, result: any) => void) {
    this._bookRepository.delete(_id, callback);
  }

  public findById(
    _id: string,
    callback: (error: any, result: IBookModel) => void
  ) {
    this._bookRepository.findById(_id, callback);
  }

  public retrieve(callback: (error: any, result: any) => void) {
    this._bookRepository.find(callback);
  }

  public update(
    _id: string,
    item: IBookModel,
    callback: (error: any, result: any) => void
  ) {
    this._bookRepository.findById(_id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._bookRepository.update(res._id, item, callback);
      }
    });
  }
}

Object.seal(BookService);
export default BookService;
