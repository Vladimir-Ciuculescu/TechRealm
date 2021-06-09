import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../../assets/products.js';
import Product from '../../components/Product/Product'

const HomeScreen = () => {

    return (
        <React.Fragment>

            <h1>Latest news</h1>

            <Row>
                {products.map(item => (
                    <Col key = {item._id} sm = {12} md = {6} lg = {4} xl = {3}>
                        <Product product = {item} />
                    </Col>
                ))}
            </Row>
        
            
        </React.Fragment>
    )
}

export default HomeScreen;