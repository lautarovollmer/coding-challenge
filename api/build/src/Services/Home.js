"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts = exports.getProductsById = exports.getProducts = void 0;
const data = __importStar(require("../../data.json"));
const db_1 = require("../db");
const dataToDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myObject = data.map((e) => {
            e.name,
                e.description,
                e.image,
                e.price;
        });
        return myObject;
    }
    catch (error) {
        console.log(error);
    }
    ;
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query('SELECT * FROM products');
        const myData = yield dataToDb(data);
        // console.log(myData)
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
    ;
});
exports.getProducts = getProducts;
const getProductsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield db_1.pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.getProductsById = getProductsById;
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, image, price, brand } = req.body;
    const response = yield db_1.pool.query('INSERT INTO products (name, description, image, price, brand) VALUES($1, $2, $3, $4, $5)', [name, description, image, price, brand]);
    return res.send('recived');
});
exports.createProducts = createProducts;
