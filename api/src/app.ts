import express from 'express';
import routes from './Controllers/index';
import * as info from '../data.json'
import { pool } from "./db";


const cors = require('cors');
const server = express();

const dataToDb = async ( info : any ) => {
    try{
        const myObject = info.default.map((e: any) => {
            return{
                name: e.name,
                description: e.description,
                image: e.image,
                price: e.price,
                brand: e.brand
            }});
        return myObject
    }catch(error){
        console.log(error);
    };
}

 const getDataLoad = async () => {
    try{
       await pool.query('DELETE FROM products')
        const myData = await dataToDb(info);
        await myData?.map( (element: any) => {
                pool.query('INSERT INTO products (name, description, image, price, brand) VALUES($1, $2, $3, $4, $5)',
            [element.name, element.description, element.image, element.price, element.brand]);
        });
        console.log('Inicializo la data')
    } catch (error) {
        console.log(error)
    }
}
getDataLoad()
//Middlewares
server.use(cors())
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use('/', routes);

export default server;