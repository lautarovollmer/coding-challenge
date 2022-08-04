"use strict";
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
exports.editProducts = exports.deleteProducts = exports.createProducts = exports.getProductsById = exports.getProducts = void 0;
const db_1 = require("../db");
;
const dataToDb = (info) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myObject = info.default.map((e) => {
            return {
                name: e.name,
                description: e.description,
                image: e.image,
                price: e.price
            };
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
        // const myData = await dataToDb(info);
        // await myData?.map( (element: any) => {
        //         pool.query('INSERT INTO products (name, description, image, price, brand) VALUES($1, $2, $3, $4, $5)',
        //     [element.name, element.description, element.image, element.price, element.brand]);
        // });
        const response = yield db_1.pool.query('SELECT * FROM products');
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
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield db_1.pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json(`Products ${id} deleted Successfully`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProducts = deleteProducts;
const editProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        const { name, description, image, price, brand } = req.body;
        yield db_1.pool.query(`UPDATE products SET name = $1, description = $2, image = $3, price = $4, brand = $5 WHERE id = ${id}`, [name, description, image, price, brand]);
        res.send(`Products ${id} Update Successfully`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.editProducts = editProducts;
