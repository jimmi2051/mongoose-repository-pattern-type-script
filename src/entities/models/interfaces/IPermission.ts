import mongoose = require("mongoose");

interface IPermission extends mongoose.Document {
  _id: any;

  action: string;
  enabled: boolean;
  resource: string;
}

export default IPermission;
