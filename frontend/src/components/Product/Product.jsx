import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';
import Rating from '../Rating/Rating';



const Product = ({product}) => {

    return (
        <Card className = "mx-3 my-3 p-3 rounded card-item">

            <a href={`/product/${product._id}`}>
                <Card.Img className = "product-image" src = {product.image} variant = "top"></Card.Img>
            </a>

            <Card.Body>
                
                <a className = "link-to-product" href = {`/product/${product._id}`}>
                    <Card.Title><strong>{product.name}</strong></Card.Title>
                </a>

                <Card.Text as="div">
                    <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
                </Card.Text>


                <Card.Text as="h3">
                    <h3 className = "price">{product.price}$</h3>
                </Card.Text>
                
            </Card.Body>

        </Card>
    )
}

export default Product;