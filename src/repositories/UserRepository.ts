import IUser from "../entities/models/interfaces/IUser";
import UserChema from "../entities/schemas/User";
import BaseRepository from "./base/BaseRepository";

class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(UserChema);
  }

  public findById(_id: string, callback: (error: any, result: IUser) => void) {
    UserChema.findById(_id, callback).select("-password");
  }
  public findOne(query: any, callback: (error: any, result: IUser) => void) {
    UserChema.findOne(query, callback);
  }
}
// Object can change value but it can't add property.
Object.seal(UserRepository);
export default UserRepository;
