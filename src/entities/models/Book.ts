import IBook from "./interfaces/IBook";

class Book {
  constructor(bookModel: IBook) {
    this._bookModel = bookModel;
  }
  private _bookModel: IBook;

  get author(): string {
    return this._bookModel.author;
  }
  get title(): string {
    return this._bookModel.title;
  }
}

Object.seal(Book);

export default Book;
