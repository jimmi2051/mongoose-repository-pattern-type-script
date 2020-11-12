import mongoose = require("mongoose");
import IRole from "./IRole";
interface IUser extends mongoose.Document {
  _id: any;
  accessToken: string;
  password: string;
  role: IRole;
  username: string;
}

export default IUser;
