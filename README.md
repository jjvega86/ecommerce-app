# Next.js eCommerce App

A boilerplate Next.js application with an integrated products API

## Getting Started

1. **Create a Next.js App Using this repo as an example**
   ```bash
   npx create-next-app@latest ecommerce-app --use-npm --example "https://github.com/dCC-Online/nextjs-ecommerce-app-example"
   
2. **After installation, open the project in your code editor and navigate to nextjs-ecommerce-app-example.**
   ```bash
   cd ecommerce-app

2. **Run the Next.js server & test with Postman**
   ```bash
   npm run dev

## A Postman collection is included. Import it into Postman & test each endpoint.

## API Endpoints

### Get All Products

- **Endpoint:** `http://localhost:3000/api/products`
- **Method:** `GET`
- **Response:** Array of products

### Get a Product by ID

- **Endpoint:** `http://localhost:3000/api/products/:id`
- **Method:** `GET`
- **Response:** Product object

### Create a New Product

- **Endpoint:** `http://localhost:3000/api/products`
- **Method:** `POST`
- **Body:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100.00,
  "imageUrl": "online/image/url.jpg"
}
```
- **Response:** `Product added successfully!`

## Making Requests from Next.js Frontend

- **Example POST Request:**
```javascript
const productData = {
  name: "New Product",
  description: "This is a new product",
  price: 99.99,
  imageUrl: "path/to/image.jpg"
};
// Option 1: Using fetch
fetch('http://localhost:3000/api/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(productData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// Option 2: Using axios
await axios.post("http://localhost:3000/api/products",productData)
```
