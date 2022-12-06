import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

import { Product } from '../../interfaces/Product'

interface ProductCard {
  product: Product
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const { name, defaultImage, id, price, numberOfReviews, rating } = product

  return (
    <Card className="product_card_container">
      <Link to={`/products/${id}`}>
        <Card.Img height={300} variant="top" src={defaultImage?.url} />
      </Link>
      <Card.Body>
        <Link className="product_card_name" to={`/products/${id}`}>
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
