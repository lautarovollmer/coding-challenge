CREATE DATABASE productstest;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description TEXT,
    image TEXT,
    price TEXT,
    brand TEXT
);

