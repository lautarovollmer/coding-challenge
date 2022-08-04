import {Router} from "express";
import { getProducts, getProductsById, createProducts, deleteProducts, editProducts } from '../Services/Home'

const router = Router();


router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.put('/editproducts/:id', editProducts);
router.post('/createproducts', createProducts);
router.delete('/products/:id', deleteProducts);

export default router;