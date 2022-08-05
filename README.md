# IT CROWD Challenge

## Deployment

Backend: [Heroku] ()
Frontend: [Vercel] ()

Database: PostgresSQL

## Backend

- [dotenv] To load environment variables from an .env file.
- [express] To create the api and start our server, although it could be done with the node http module, it is much simpler to use this framework.
- [pg, pg-hstore] libraries in order to be able to use postgreSQL.

**Brief description:**
The **backend**(developed with express) connects to the postgres **database**, then through a `json file`, which contains false data from different products, the database is initialized. Through the defined endpoints you can **create**, **update** and **delete** the products. To proceed with the steps above you need to be logged in (username: username, password: 1234).

**Endpoints:**
**`GET`**

- `/products`: returns as response an array with all the products in the database.
- `/products/:id`: returns an object with the product information as a response.

**`POST`**
`/products`: receives by body the data of the product and the brand. Return the product created.

```json
//example body
{
  "product": {
    "name": "Monitor Samsung 24 pulgadas",
    "description": "resolución 1920 x 1080, 75 Hz de frecuencia",
    "image": "https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp",
    "price": "$52999",
    "brand": "Samsung"
  }
}
```

**`PUT`**

- `/products`: receives by body the id of the product to update, the product data.

```json
 //example body
	{
	"id":"e229cda0-e039-4f63-9e87-a2ac0eb5b2fa",
	"dataProduct": {
		"name": "Roller",
		"description": "Roller para adultos, para practicar.",
		"image_url": "https://mercadoamil.com.ar/wp-content/uploads/2021/02/IMG_0623-scaled.jpg",
		"price": 7000
	},
```

**`DELETE`**

- `/products`: receives by body the id of the product to be removed

```json
{
  "id": "1"
}
```

## Frontend

**Libraries:**

- [react] to create the different interfaces in a simple and composable way.

**Brief description:**
The **client** consumes from the **backend** the products stored in the database. You can see in the `/products` route all the _paginated_ products. Each product can be clicked and will take us to a **detailed** route that is responsible for displaying all the data, including the brand of the product. Also in our header there is a button **login** (only for administrator).

## How to test the app locally.

git clone https://github.com/lautarovollmer/coding-challenge.git
in the `/api` folder **we must create** a `.env` file that contains the following:

DB_NAME= // the name of the database we created
DB_USER=//postgres username (default is postgres)
DB_HOST=localhost
DB_PASS=//the password of your postgres user
PORT=3001
