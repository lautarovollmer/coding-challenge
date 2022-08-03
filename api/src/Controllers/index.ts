import {Router} from "express";
import { getProducts, getProductsById } from '../Services/Home'

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.put('/products', getProducts);
router.post('/products', getProducts);
router.delete('/home:id', getProducts);

export default router;