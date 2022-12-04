import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

import { Product } from '../../interfaces/Product'

interface ProductCard {
  product: Product
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const { name, image, id, price, numberOfReviews, rating } = product

  console.log(product)

  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/products/${id}`}>
        <Card.Img height={350} width={100} variant="top" src={image} />
      </Link>
      <Card.Body>
        <Link style={{ textDecoration: 'none' }} to={`/products/${id}`}>
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
