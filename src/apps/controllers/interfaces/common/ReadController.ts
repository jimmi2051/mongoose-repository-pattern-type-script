import express = require("express");
interface IReadController {
  findById: express.RequestHandler;
  retrieve: express.RequestHandler;
}
export default IReadController;
