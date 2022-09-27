import React from 'react'
import { Row, Col, Image, Card, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { products } from '../dummyData'
import { useParams, Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'

interface IProps {}

const ProductScreen: React.FC<any> = () => {
  const { id } = useParams()

  const product = products.find((product) => product.id === id)

  if (product) {
    const {
      image,
      name,
      price,
      numberOfReviews,
      rating,
      description,
      countInStock,
    } = product

    return (
      <>
        <Link to="/" className="btn btn-light my-3">
          Go back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={image} alt={name} fluid />
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
                    <strong>{price}</strong>
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
              <ListGroup.Item>
                <Button
                  className="button__add-to-cart"
                  type="button"
                  disabled={countInStock === 0}
                >
                  <FaCartPlus className="icon__add-to-card" size={23} />
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
