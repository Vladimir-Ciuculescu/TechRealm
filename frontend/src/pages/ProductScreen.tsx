import React, { useState, useEffect } from 'react'
import { Row, Col, Image, Card, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams, Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { Product } from '../interfaces/Product'
import Select from 'react-select'
import axios from 'axios'
import { CommonSelect } from '../components/common/CommonSelect'
import { SelectOption } from '../interfaces/SelectOption'
import { ImageSet } from '../components/Product/ImageSet'
import { ImageSlider } from '../components/Product/ImageSlider'

const options: SelectOption[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
]

const ProductScreen: React.FC<any> = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<Product>()
  const [quantity, setQuantity] = useState<number>()
  const [productImages, setProductImages] = useState<any[]>([])

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`)
      const { product, images } = data
      setProduct(product)
      setProductImages(images)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  if (product) {
    const { name, price, numberOfReviews, rating, description, countInStock } =
      product

    return (
      <>
        <Link to="/" className="btn btn-light my-3">
          Go back
        </Link>
        <Row>
          <Col md={6} lg={6}>
            <ImageSlider images={productImages} />
            <ImageSet images={productImages} />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>
                <h3>{name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  numberOfStars={rating}
                  numberOfReviews={numberOfReviews}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : {price} $</ListGroup.Item>
              <ListGroup.Item>{description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col>
                    <strong>{price}$</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    <strong>
                      {countInStock > 0 ? 'In Stock' : 'Out of stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity:</Col>
                    <Col>
                      <CommonSelect
                        defaultValue={options[0]}
                        options={options}
                      />
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className="button__add-to-cart"
                  type="button"
                  disabled={countInStock === 0}
                >
                  <FaCartPlus className="icon__add-to-cart" size={23} />
                  ADD TO CART
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    )
  }

  return null
}

export default ProductScreen
