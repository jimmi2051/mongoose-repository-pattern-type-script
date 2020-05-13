import IReadController from "../common/ReadController";
import IWriteController from "../common/WriteController";
import IBaseServices from "../../../../services/base/BaseService";
interface IBaseController<T extends IBaseServices<object>>
  extends IReadController,
    IWriteController {}
export default IBaseController;
