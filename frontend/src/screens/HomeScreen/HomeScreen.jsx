import React, {useEffect} from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import Product from '../../components/Product/Product'
import {listProducts} from '../../redux/actions/productActions.js';

const HomeScreen = () => {

    const dispatch = useDispatch();

    //Here we fetch the products data from our api

    const productList = useSelector(state => state.productList)

    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])
    

    return (
        <React.Fragment>

            <h1>Latest Products</h1>

            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : error ? (<h3>{error}</h3>) : (
                     <Row>
                        {products.map(item => (
                            <Col key = {item._id} sm = {12} md = {6} lg = {4} xl = {3}>
                                <Product product = {item} />
                            </Col>
                        ))}
                    </Row>
            )}

           
        
            
        </React.Fragment>
    )
}

export default HomeScreen;