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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./Controllers/index"));
const info = __importStar(require("../data.json"));
const db_1 = require("./db");
const cors = require('cors');
const server = (0, express_1.default)();
const dataToDb = (info) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myObject = info.default.map((e) => {
            return {
                name: e.name,
                description: e.description,
                image: e.image,
                price: e.price,
                brand: e.brand
            };
        });
        return myObject;
    }
    catch (error) {
        console.log(error);
    }
    ;
});
const getDataLoad = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.pool.query('DELETE FROM products');
        const myData = yield dataToDb(info);
        yield (myData === null || myData === void 0 ? void 0 : myData.map((element) => {
            db_1.pool.query('INSERT INTO products (name, description, image, price, brand) VALUES($1, $2, $3, $4, $5)', [element.name, element.description, element.image, element.price, element.brand]);
        }));
        console.log('Inicializo la data');
    }
    catch (error) {
        console.log(error);
    }
});
getDataLoad();
//Middlewares
server.use(cors());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use('/', index_1.default);
exports.default = server;
