import React from 'react';
import products from '../../assets/products.js';
import { Link } from 'react-router-dom';

const ProductScreen = ({match}) => {

    const product = products.find(item => item._id === match.params.id);

    return (
        <>
            <Link to="/" className="btn btn-dark my-3">
                Go back
            </Link>
        </>
    )
}

export default ProductScreen;