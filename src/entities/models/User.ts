import IUser from "./interfaces/IUser";

class User {
  constructor(userModel: IUser) {
    this._userModel = userModel;
  }
  private _userModel: IUser;

  get username(): string {
    return this._userModel.username;
  }
  get role(): string {
    return this._userModel.role;
  }
  get accessToken(): string {
    return this._userModel.accessToken;
  }
}

Object.seal(User);

export default User;
