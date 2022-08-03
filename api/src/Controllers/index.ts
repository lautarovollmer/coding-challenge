import {Router} from "express";
import { getProducts } from '../Services/Home'

const router = Router();

router.get('/home', getProducts);

export default router;