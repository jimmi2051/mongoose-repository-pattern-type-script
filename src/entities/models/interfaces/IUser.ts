import mongoose = require("mongoose");

interface IUser extends mongoose.Document {
  _id: any;
  accessToken: string;
  password: string;
  role: string;
  username: string;
}

export default IUser;
