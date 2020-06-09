import { Router } from "express";
import BookRoutes from "./book";
import UserRoutes from "./user";
const router = Router();
// we will add routes to this default router in future

router.use("/", new BookRoutes().routes);
router.use("/", new UserRoutes().routes);
export default router;
