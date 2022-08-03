"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Home_1 = require("../Services/Home");
const router = (0, express_1.Router)();
router.get('/products', Home_1.getProducts);
router.get('/products/:id', Home_1.getProductsById);
router.put('/products', Home_1.getProducts);
router.post('/products', Home_1.getProducts);
router.delete('/home:id', Home_1.getProducts);
exports.default = router;