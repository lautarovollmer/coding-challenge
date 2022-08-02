import express from 'express';
import routes from './routes/index';

const server = express();

server.use('/', routes);

server.use((err : any, req : any, res : any, next : any) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

export default server;