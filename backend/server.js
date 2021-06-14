//Basic code to make the server run with command : node backend/server
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import {NotFound, errorHandler} from './Error/ModdlewareError.js'

dotenv.config();

connectDB();

const app = express();


//Test API

app.get('/', (req, res) => {
    res.send("API is running");
})


app.use('/api/products', productRoutes);

app.use(NotFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue));

