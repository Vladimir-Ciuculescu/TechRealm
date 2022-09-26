import React from 'react'
import { Card } from 'react-bootstrap'
import { ProductCardType } from './ProductCardType'

interface ProductCard {
  product: ProductCardType
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  const { name, description, image } = product

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
