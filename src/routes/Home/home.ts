import express, {Router} from "express";
import {getHome} from "../../controllers/Home/home";

const router = Router();

router.get('/', getHome);

export default router;