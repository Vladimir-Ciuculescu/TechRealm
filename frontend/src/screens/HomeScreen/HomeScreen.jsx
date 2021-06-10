import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../../components/Product/Product'
import axios from 'axios';

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    //Here we fetch the products data from our api

    useEffect(() => {

        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');

            setProducts(data);
        }

        fetchProducts();
    }, [])

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