import Mongoose = require("mongoose");
import { MONGO_URI } from "../infastructures/Constants";

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
    Mongoose.connect(MONGO_URI);
    this.mongooseInstance = Mongoose;
    return this.mongooseInstance;
  }
}
MyContext.connect();
export default MyContext;