

const express = require('express')
const env = require('dotenv')
const products = require('./data/dummyData')
const pg_model = require('./pg_model.js')
const colors = require('colors')

env.config()

const app = express()

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});


app.get('/products', (req, res) => {
	res.json(products)
})

app.get('/products/:id', (req, res) => {
	const product = products.find((product) => product.id === req.params.id)
	res.json(product)	
})

app.get('/', (req, res) => {
  pg_model.getProducts()
  .then(response => {
		console.log(response)
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/merchants', (req, res) => {
  pg_model.createMerchant(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/merchants/:id', (req, res) => {
  pg_model.deleteMerchant(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

const PORT = process.env.PORT || 5000
const mode = process.env.NODE_ENV 

app.listen(PORT, console.log(`Running ${mode} mode on port 5000`.cyan.bold))