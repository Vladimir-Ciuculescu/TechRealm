import React from 'react'
import { products } from '../dummyData'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/Product/ProductCard'

interface IProps {}

const HomeScreen: React.FC<IProps> = () => {
  return (
    <>
      <h1>Lates Products </h1>
      <Row>
        {products.map((product: any) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
