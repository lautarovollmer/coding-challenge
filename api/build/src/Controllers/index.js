"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Home_1 = require("../Services/Home");
const router = (0, express_1.Router)();
router.get('/home', Home_1.getProducts);
exports.default = router;
