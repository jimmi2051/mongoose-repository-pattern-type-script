import MyContext from "../Context";
import IBookModel from "../models/interfaces/IBook";

const mongoose = MyContext.mongooseInstance;
const mongooseConnection = MyContext.mongooseConnection;

class BookSchema {
  static get schema() {
    const schema = mongoose.Schema({
      title: { type: String, required: true },
      author: { type: String, required: true },
    });
    return schema;
  }
}

const schema = mongooseConnection.model<IBookModel>("Books", BookSchema.schema);

export default schema;
