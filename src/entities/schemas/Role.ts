import MyContext from "../Context";
import IRoleModel from "../models/interfaces/IRole";

const mongoose = MyContext.mongooseInstance;
const mongooseConnection = MyContext.mongooseConnection;

class RoleSchema {
  static get schema() {
    const schema = mongoose.Schema({
      enabled: { type: Boolean, required: true },
      name: { type: String, required: true },

      type: { type: String, required: true },
      permissions: [
        {
          ref: "Permission",
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
    });
    return schema;
  }
}

const schema = mongooseConnection.model<IRoleModel>("Role", RoleSchema.schema);

export default schema;
