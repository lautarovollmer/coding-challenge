import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: String(DB_PASSWORD),
    database: DB_HOST,
    port: 5432
});