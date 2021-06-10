import React from 'react';
import products from '../../assets/products.js';
import { Link } from 'react-router-dom';
import { Row, Col, Image,ListGroup, Card, Button } from 'react-bootstrap';
import './ProductScreen.css';
import Rating from '../../components/Rating/Rating';

const ProductScreen = ({match}) => {

    const product = products.find(item => item._id === match.params.id);

    return (
        <>
            <Link to="/" className="btn btn-dark my-3">
                Go back
            </Link>

            <Row className = "my-5">
                <Col className = "my-5" md = {6}>
                    <Image className = "product-screen-image" src = {product.image} alt = {product.name} fluid/>
                </Col>
                <Col md = {3}>
                    <ListGroup variant = "flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Price: {product.price} $</h5>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md = {3}>
                    <Card>
                        <ListGroup variant = 'flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        {product.price} $
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                 <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In stock" : "Out of stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className=" add-to-cart" 
                                    disabled={product.countInStock > 0 ? false : true}>
                                    Add to cart
                                </Button>
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen;