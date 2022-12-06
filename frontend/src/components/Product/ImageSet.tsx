import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Image } from '../../interfaces/Image'

interface ImageSetProps {
  images?: Image[]
}

export const ImageSet: React.FC<ImageSetProps> = ({ images }) => {
  return (
    // <div className="image-set_container">
    //   {images?.map((image) => {
    //     return (
    //       <img
    //         className="image-set_mini-image_container"
    //         width={70}
    //         height={70}
    //         src={image.url}
    //         alt={''}
    //       />
    //     )
    //   })}
    // </div>

    <div className="scroll-menu">
      {images?.map((image) => {
        return (
          <div className="scroll-a">
            <img src={image.url} width={200} height={200} />
            <p>Ceva</p>
          </div>
        )
      })}
    </div>
  )
}
