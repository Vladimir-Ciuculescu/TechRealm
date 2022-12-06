import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Image } from '../../interfaces/Image'

interface ImageSetProps {
  images?: Image[]
}

export const ImageSet: React.FC<ImageSetProps> = ({ images }) => {
  console.log(images)

  return (
    // <div className="image-set_container">
    //   {images?.map((image: Image) => {
    //     return (
    //     //   <div className="image-set_mini-image">
    //     //     <img src={image.url} />
    //     //   </div>
    //     )
    //   })}
    // </div>

    <Row className="image-set_container">
      {images?.map((image: Image) => {
        return (
          <Col>
            <div>
              <img
                className="image-set_mini-image_container"
                width={50}
                height={50}
                src={image.url}
                alt={''}
              />
            </div>
          </Col>
        )
      })}
    </Row>
  )
}
