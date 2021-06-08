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
                    <Product product = {item} />
                ))}
            </Row>
        
            
        </React.Fragment>
    )
}

export default HomeScreen;