import React from 'react'
import { Card } from 'react-bootstrap'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

interface IProps {
  numberOfReviews?: number
  numberOfStars: number
}

const renderStar = (value: number, numberOfStars: number) =>
  numberOfStars >= value ? (
    <BsStarFill
      color="rgb(255, 255, 102)"
      size={22}
      style={{ paddingLeft: 5 }}
    />
  ) : numberOfStars >= value - 0.5 ? (
    <BsStarHalf
      color="rgb(255, 255, 102)"
      size={22}
      style={{ paddingLeft: 5 }}
    />
  ) : (
    <BsStar color="rgb(255, 255, 102)" size={22} style={{ paddingLeft: 5 }} />
  )

const RenderRating = (numberOfStars: number) => {
  return (
    <div style={{ justifyContent: 'space-between' }}>
      {renderStar(1, numberOfStars)}
      {renderStar(2, numberOfStars)}
      {renderStar(3, numberOfStars)}
      {renderStar(4, numberOfStars)}
      {renderStar(5, numberOfStars)}
    </div>
  )
}

const Rating: React.FC<IProps> = ({ numberOfReviews, numberOfStars }) => {
  return (
    <div className="d-flex flex-row justify-content-between">
      {numberOfReviews ? RenderRating(numberOfStars) : null}
      <Card.Text>{numberOfReviews} reviews</Card.Text>
    </div>
  )
}

export default Rating
