import { Router } from "express";
import BookRoutes from "./book";
import UserRoutes from "./user";
import AuthMiddleware from "../middlewares/auth";

const router = Router();
// we will add routes to this default router in future

router.use("/", new UserRoutes().routes);
router.use("/", new AuthMiddleware().base, new BookRoutes().routes);
export default router;
