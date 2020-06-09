import MyContext from "../Context";
import IUser from "../models/interfaces/IUser";

const mongoose = MyContext.mongooseInstance;
const mongooseConnection = MyContext.mongooseConnection;

class UserSchema {
  static get schema() {
    const schema = mongoose.Schema({
      username: { type: String, required: true, trim: true },
      password: { type: String, required: true },
      role: {
        type: String,
        default: "basic",
        enum: ["basic", "supervisor", "admin"],
      },
      accessToken: { type: String },
    });
    return schema;
  }
}

const schema = mongooseConnection.model<IUser>("Users", UserSchema.schema);

export default schema;
