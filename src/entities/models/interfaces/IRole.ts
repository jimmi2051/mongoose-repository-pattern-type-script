import mongoose = require("mongoose");
import IPermission from "./IPermission";
interface IRole extends mongoose.Document {
  _id: any;
  enabled: boolean;
  name: string;
  permissions: [IPermission];
  type: string;
}

export default IRole;
