//Basic code to make the server run with command : node backend/server
import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue));

