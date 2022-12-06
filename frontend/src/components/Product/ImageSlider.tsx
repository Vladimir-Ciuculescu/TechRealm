import React from 'react'
import { Image } from '../../interfaces/Image'

interface ImageSliderProps {
  images: Image[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  console.log(images)

  return (
    <div className="image-slider">
      {images?.map((image) => {
        return (
          <div className="image-slider_container">
            <img src={image.url} className="image-slider_element" alt="" />
            <p>Ceva</p>
          </div>
        )
      })}
    </div>
  )
}
