"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./Controllers/index"));
const server = (0, express_1.default)();
//Middlewares
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use('/', index_1.default);
exports.default = server;
