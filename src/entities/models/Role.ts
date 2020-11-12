import IRole from "./interfaces/IRole";
import IPermission from "./interfaces/IPermission";

class Role {
  constructor(roleModel: IRole) {
    this._roleModel = roleModel;
  }
  private _roleModel: IRole;

  get name(): string {
    return this._roleModel.name;
  }
  get type(): string {
    return this._roleModel.type;
  }
  get permissions(): IPermission[] {
    return this._roleModel.permissions;
  }
  get enabled(): boolean {
    return this._roleModel.enabled;
  }
}

Object.seal(Role);

export default Role;
