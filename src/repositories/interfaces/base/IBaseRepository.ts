import mongoose = require("mongoose");

export interface IWrite<T> {
  create: (item: T, callback: (error: any, result: any) => void) => void;
  delete: (_id: string, callback: (error: any, result: any) => void) => void;
  update: (
    _id: mongoose.Types.ObjectId,
    item: T,
    callback: (error: any, result: any) => void
  ) => void;
}

export interface IRead<T> {
  find: (callback: (error: any, result: any) => void) => void;
  findById: (id: string, callback: (error: any, result: T) => void) => void;
}
