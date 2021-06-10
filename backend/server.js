//Basic code to make the server run with command : node backend/server

const express = require('express');
const products = require('./data/products');

const app = express();

//Test API

app.get('/', (req, res) => {
    res.send("API is running");
})

//API to get all products

app.get('/api/products', (req, res) => {
    res.json(products);
})

//API to get the specific product

app.get('/api/products/:id', (req, res) => {

    const product = products.find(item => item._id === req.params.id);
    res.json(product);
})

app.listen(5000, console.log("Server running on port 5000"));