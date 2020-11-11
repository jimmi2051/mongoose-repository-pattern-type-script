import Mongoose = require("mongoose");
import { MONGO_URI } from "../infastructures/Constants";
import PermissionSchema from "./schemas/Permission";
class MyContext {
  public static mongooseConnection: Mongoose.Connection;
  public static mongooseInstance: any;
  constructor() {
    MyContext.connect();
  }
  public static connect(): Mongoose.Connection {
    if (this.mongooseInstance) {
      return this.mongooseInstance;
    }

    this.mongooseConnection = Mongoose.connection;
    this.mongooseConnection.once("open", () => {
      console.log("MongoDB Connected...");
    });
    const options: any = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    Mongoose.connect(MONGO_URI, options);
    this.mongooseInstance = Mongoose;

    return this.mongooseInstance;
  }
}
MyContext.connect();
export default MyContext;
