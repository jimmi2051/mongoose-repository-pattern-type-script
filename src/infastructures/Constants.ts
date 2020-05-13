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

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const MONGO_URI = process.env.MONGO_URI;
