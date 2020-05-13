import { IRead, IWrite } from "../common/IBaseService";

interface IBaseService<T> extends IRead<T>, IWrite<T> {}

export default IBaseService;
