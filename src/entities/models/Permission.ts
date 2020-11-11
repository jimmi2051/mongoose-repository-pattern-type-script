import IPermission from "./interfaces/IPermission";

class Permission {
  constructor(permissionModel: IPermission) {
    this._permissionModel = permissionModel;
  }
  private _permissionModel: IPermission;

  get resource(): string {
    return this._permissionModel.resource;
  }
  get action(): string {
    return this._permissionModel.action;
  }
  get enabled(): boolean {
    return this._permissionModel.enabled;
  }
  get can(): string {
    return `Can ${this._permissionModel.action} ${this._permissionModel.resource}`;
  }
}

Object.seal(Permission);

export default Permission;
