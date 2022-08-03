CREATE DATABASE productstest;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    brand TEXT
);

INSERT INTO products(name, brand)
    VALUES('Zapas', 'ADIDAS'),
            ('Zapas', 'NIKE');