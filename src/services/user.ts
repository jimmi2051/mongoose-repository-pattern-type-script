import UserRepository from "../repositories/UserRepository";

import IUserModel from "../entities/models/interfaces/IUser";

import { hashPassword, validatePassword } from "../infastructures/Helpers";
import jwt = require("jsonwebtoken");
class BookService {
  constructor() {
    this._userRepository = new UserRepository();
  }
  private _userRepository: UserRepository;

  public create(item: IUserModel, callback: (error: any, result: any) => void) {
    this._userRepository.create(item, callback);
  }

  public delete(_id: string, callback: (error: any, result: any) => void) {
    this._userRepository.delete(_id, callback);
  }

  public findById(
    _id: string,
    callback: (error: any, result: IUserModel) => void
  ) {
    this._userRepository.findById(_id, callback);
  }

  public retrieve(callback: (error: any, result: any) => void) {
    this._userRepository.find(callback);
  }

  public async signUp(
    item: IUserModel,
    callback: (error: any, result: any) => void
  ) {
    if (!item.username || !item.password) {
      if (typeof callback === "function") {
        callback(
          { status: false, message: "Username & Password is requried" },
          {}
        );
      }
    }
    this._userRepository.findOne(
      { username: item.username },
      async (err, res) => {
        if (res._id) {
          callback({ status: false, message: "User has already existed" }, {});
        } else {
          item.password = await hashPassword(item.password);
          this._userRepository.create(item, callback);
        }
      }
    );
  }

  public async signIn(
    item: IUserModel,
    callback: (error: any, result: any) => void
  ) {
    if (!item.username || !item.password) {
      if (typeof callback === "function") {
        callback(
          { status: false, message: "Username & Password is requried" },
          {}
        );
      }
    }
    this._userRepository.findOne(
      { username: item.username },
      async (err, res) => {
        if (res._id) {
          const validPassword = await validatePassword(
            item.password,
            res.password
          );
          if (!validPassword) {
            callback({ status: false, message: "Password is not correct" }, {});
          } else {
            const accessToken = jwt.sign(
              { userId: res._id },
              process.env.JWT_SECRET,
              {
                expiresIn: "1d",
              }
            );
            res.accessToken = accessToken;
            await res.save();
            callback(
              { status: true, username: item.username, accessToken },
              {}
            );
          }
        } else {
          callback({ status: false, message: "Account doesn't exist" }, {});
        }
      }
    );
  }

  public update(
    _id: string,
    item: IUserModel,
    callback: (error: any, result: any) => void
  ) {
    this._userRepository.findById(_id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._userRepository.update(res._id, item, callback);
      }
    });
  }
}

Object.seal(BookService);
export default BookService;