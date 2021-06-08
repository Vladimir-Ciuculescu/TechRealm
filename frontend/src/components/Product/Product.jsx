import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './Product.css';

const Product = ({product}) => {

    return (
        <Card className = "mx-3 my-3 p-3 rounded card-item">

            <a href={`/product/${product._id}`}>
                <Card.Img className = "product-image" src = {product.image} variant = "top"></Card.Img>
            </a>

            <Card.Body>
                
                <Card.Title><strong>{product.name}</strong></Card.Title>

                <Card.Text as="div">
                    <div className = "my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    <h3>{product.price}$</h3>
                </Card.Text>
                
            </Card.Body>

        </Card>
    )
}

export default Product;