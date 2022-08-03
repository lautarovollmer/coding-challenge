import { Request, Response } from "express";
import { QueryResult } from 'pg';

import { pool } from "../db";

export const getProducts = async (req : Request, res : Response): Promise<Response> => {
    try {
        const response : QueryResult = await pool.query('SELECT * FROM products');
        console.log(response.rows);
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