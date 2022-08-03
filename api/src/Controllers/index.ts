import {Router} from "express";
import { getProducts, getProductsById, createProducts } from '../Services/Home'

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.put('/products', getProducts);
router.post('/createproducts', createProducts);
router.delete('/home:id', getProducts);

export default router;