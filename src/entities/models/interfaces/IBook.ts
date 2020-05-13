import mongoose = require("mongoose");

interface IBook extends mongoose.Document {
  _id: any;
  author: string;
  title: string;
}

export default IBook;
