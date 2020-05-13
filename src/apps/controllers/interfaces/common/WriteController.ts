import express = require("express");
interface IWriteController {
  create: express.RequestHandler;
  delete: express.RequestHandler;
  update: express.RequestHandler;
}

export default IWriteController;
