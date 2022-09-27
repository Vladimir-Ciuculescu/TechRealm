import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../components/Product/ProductCard'
import { Product } from '../components/Product/Product'
import axios from 'axios'

interface IProps {}

const HomeScreen: React.FC<IProps> = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const { data } = await axios.get('/products')

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products </h1>
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
