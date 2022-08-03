import { Request, Response } from "express";
import { QueryResult } from 'pg';

import { pool } from "../db";

export const getProducts = async (req : Request, res : Response) => {
    try {
        const response : QueryResult = await pool.query('SELECT * FROM products');
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch(error){
        console.log(error);
        return res.status(500).json('Internal Server Error');
    };
};
