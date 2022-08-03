import { Router } from "express";
import Home from "./Home/home";

const router = Router();

router.use("/", Home);

export default router;