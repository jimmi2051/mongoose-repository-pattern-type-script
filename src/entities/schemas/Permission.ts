import MyContext from "../Context";
import IPermissionModel from "../models/interfaces/IPermission";

const mongoose = MyContext.mongooseInstance;
const mongooseConnection = MyContext.mongooseConnection;

class PermissionSchema {
  static get schema() {
    const schema = mongoose.Schema({
      action: { type: String, required: true },
      enabled: { type: Boolean, required: true },
      resource: { type: String, required: true },
    });
    return schema;
  }
}

const schema = mongooseConnection.model<IPermissionModel>(
  "Permission",
  PermissionSchema.schema
);

export default schema;
