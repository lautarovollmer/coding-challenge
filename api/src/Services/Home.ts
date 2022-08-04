import { Request, response, Response } from "express";
import { request } from "http";
import { QueryResult } from 'pg';
import * as info from '../../data.json'

import { pool } from "../db";

interface MyObject{
    name: string,
    description: string,
    image: string,
    price: string
};



export const getProducts = async (req : Request, res : Response): Promise<Response> => {
    try {
       const response : QueryResult = await pool.query('SELECT * FROM products');
        return res.status(200).json(response.rows);
    } catch(error){
        console.log(error);
        return res.status(500).json('Internal Server Error');
    };
};

export const getProductsById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return  res.json(response.rows);
}

export const createProducts = async(req: Request, res: Response) => {
    const { name, description, image, price, brand } = req.body;
    const response: QueryResult = await pool.query('INSERT INTO products (name, description, image, price, brand) VALUES($1, $2, $3, $4, $5)',[name, description, image, price, brand])
    return res.send('recived')
}

export const deleteProducts = async(req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json(`Products ${id} deleted Successfully`)

    } catch(error){
        console.log(error)
    }
}

export const editProducts = async(req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        console.log(id)
        const { name, description, image, price, brand } = req.body;

       await pool.query(`UPDATE products SET name = $1, description = $2, image = $3, price = $4, brand = $5 WHERE id = ${id}`, [name, description, image, price, brand]);
       res.send(`Products ${id} Update Successfully`);
    }catch(error){
        console.log(error)
    }
}
