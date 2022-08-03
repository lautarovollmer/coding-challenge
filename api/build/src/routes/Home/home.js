"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = require("../../controllers/Home/home");
const router = (0, express_1.Router)();
router.get('/', home_1.getHome);
exports.default = router;
