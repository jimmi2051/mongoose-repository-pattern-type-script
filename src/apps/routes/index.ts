import { Router } from "express";
import BookRoutes from "./book";
import UserRoutes from "./user";
import AuthMiddleware from "../../apps/middlewares/checkJwt";
const router = Router();
// we will add routes to this default router in future

router.use("/", new UserRoutes().routes);
router.use("/", new BookRoutes().routes, new AuthMiddleware().base);
export default router;
