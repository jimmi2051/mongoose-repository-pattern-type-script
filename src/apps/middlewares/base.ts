import express = require("express");
class BaseMiddleware {
  public base(req: express.Request, res: express.Response, next): void {
    /* Before call func */
    next();
    /* After call func */
  }
}
export default BaseMiddleware;
