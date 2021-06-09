import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';



const Product = ({product}) => {

    return (
        <Card className = "mx-3 my-3 p-3 rounded card-item">

            <Link to={`/product/${product._id}`}>
                <Card.Img className = "product-image" src = {product.image} variant = "top"></Card.Img>
            </Link>

            <Card.Body>
                
                <Link to = {`/product/${product._id}`} className = "link-to-product" >
                    <Card.Title><strong>{product.name}</strong></Card.Title>
                </Link>

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