import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

import { Product } from './Product'

interface ProductCard {
  product: Product
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const { name, image, id, price, numberOfReviews, rating } = product

  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
          <Card.Title>
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Rating numberOfStars={rating} numberOfReviews={numberOfReviews} />
        <Card.Text className="mt-3" as="h3">
          {price} $
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
