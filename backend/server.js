const express = require('express')
const products = require('./data/dummyData')

const app = express()

app.get('/', (req, res) => {
	res.send('API is running !')
})

app.get('/products', (req, res) => {
	res.json(products)
})

app.get('/products/:id', (req, res) => {
	const product = products.find((product) => product.id === req.params.id)
	res.json(product)	
})

app.listen(5000, console.log('Application running on port 5000'))