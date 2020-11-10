import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `.env.production`;
    break;
  default:
    path = `.env`;
}
dotenv.config({ path });

const listResources = [
  {
    method: "GET",
    path: "/books",
    resource: "book",
  },
  {
    method: "POST",
    path: "/books",
    resource: "book",
  },
  {
    method: "PUT",
    path: "/books/:_id",
    resource: "book",
  },
  {
    method: "DELETE",
    path: "/books/:_id",
    resource: "book",
  },
  {
    method: "GET",
    path: "/books/:_id",
    resource: "book",
  },
];

export const detectResource = (path, method) => {
  const idxResource = listResources.findIndex(
    (resource) => resource.path === path && resource.method === method
  );
  if (idxResource > -1) {
    return listResources[idxResource].resource;
  } else {
    return null;
  }
};

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_KEY = process.env.JWT_KEY;
