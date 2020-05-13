// import all interfaces
import { IWrite, IRead } from "../interfaces/base/IBaseRepository";

import mongoose = require("mongoose");

class RepositoryBase<T extends mongoose.Document>
  implements IRead<T>, IWrite<T> {
  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }
  private _model: mongoose.Model<mongoose.Document>;

  public create(
    item: T,
    callback: (error: any, result: mongoose.Document[]) => void
  ) {
    this._model.create(item, callback);
  }

  public delete(_id: string, callback: (error: any, result: any) => void) {
    this._model.remove({ _id: this.toObjectId(_id) }, (err) =>
      callback(err, null)
    );
  }

  public find(callback: (error: any, result: mongoose.Document[]) => void) {
    this._model.find({}, callback);
  }

  public findById(_id: string, callback: (error: any, result: T) => void) {
    this._model.findById(_id, callback);
  }
  public update(
    _id: mongoose.Types.ObjectId,
    item: T,
    callback: (error: any, result: any) => void
  ) {
    this._model.update({ _id }, item, callback);
  }

  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }
}

export default RepositoryBase;
