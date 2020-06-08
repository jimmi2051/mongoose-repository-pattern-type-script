import BookModel from "../entities/models/Book";
import IBookModel from "../entities/models/interfaces/IBook";
import BookSchema from "../entities/schemas/Book";
import BaseRepository from "./base/BaseRepository";

class BookRepository extends BaseRepository<IBookModel> {
  constructor() {
    super(BookSchema);
  }
}
// Object can change value but it can't add property.
Object.seal(BookRepository);
export default BookRepository;
