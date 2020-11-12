import IUser from "./interfaces/IUser";

class User {
  constructor(userModel: IUser) {
    this._userModel = userModel;
  }
  private _userModel: IUser;

  get username(): string {
    return this._userModel.username;
  }
  get roleType(): string {
    return this._userModel.role.type;
  }
  get roleName(): string {
    return this._userModel.role.name;
  }
  get accessToken(): string {
    return this._userModel.accessToken;
  }
}

Object.seal(User);

export default User;
