import express = require("express");
import moment = require("moment");
import { getActualRequestDurationInMilliseconds } from "../../infastructures/Helpers";
import chalk = require("chalk");
// import logger from "../../infastructures/Logger";
class BaseMiddleware {
  public base(req: express.Request, res: express.Response, next): void {
    /* Before call func */
    const currentDatetime = new Date();
    const formattedDate = moment(currentDatetime).format("MM-DD-YYYY hh:mm");
    const method = req.method;
    const url = req.url;
    const status = res.statusCode;
    const start = process.hrtime();
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(
      start
    );
    const log = `[${chalk.blue(
      formattedDate
    )}] ${method}:${url} ${status} ${chalk.red(
      durationInMilliseconds.toLocaleString() + "ms"
    )}`;
    console.log(log);
    // logger.log({
    //   level: "info",
    //   message: log,
    // });
    next();
    /* After call func */
  }
}
export default BaseMiddleware;
