import express from 'express';
import routes from './Controllers/index';

const server = express();

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use('/', routes);

export default server;