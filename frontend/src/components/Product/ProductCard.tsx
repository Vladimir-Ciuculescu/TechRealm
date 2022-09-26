import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../Rating'
import { ProductCardType } from './ProductCardType'

interface ProductCard {
  product: ProductCardType
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const { name, image, id, price, numberOfReviews, rating } = product

  return (
    <Card style={{ width: '18rem' }}>
      <a href={`/product/${id}`}>
        <Card.Img variant="top" src={image} />
      </a>
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>

        <Rating numberOfStars={rating} numberOfReviews={numberOfReviews} />
        <Card.Text className="mt-3" as="h3">
          {price} $
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
