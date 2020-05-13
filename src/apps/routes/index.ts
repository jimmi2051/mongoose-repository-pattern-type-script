import { Router } from "express";
import BookRoutes from "./book";
const router = Router();
// we will add routes to this default router in future

router.use("/", new BookRoutes().routes);

export default router;