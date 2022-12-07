import React, { useRef, useState } from 'react'
import { Image } from '../../interfaces/Image'
import SwipeableViews from 'react-swipeable-views'
import { useDispatch, useSelector } from 'react-redux'
import { productSelector } from '../../redux/product/selectors'

interface ImageSliderProps {
  images: Image[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const { activeImage } = useSelector(productSelector)

  return (
    // <div className="image-slider" ref={scrollRef}>
    // {images?.map((image) => {
    //   return (
    //     <div key={image.id} className="image-slider_container">
    //       <img src={image.url} className="image-slider_element" alt="" />
    //     </div>
    //   )
    // })}
    // </div>
    <SwipeableViews index={activeImage.index} enableMouseEvents>
      {images?.map((image) => {
        return (
          <div key={image.id} className="image-slider_container">
            <img src={image.url} className="image-slider_element" alt="" />
          </div>
        )
      })}
    </SwipeableViews>
  )
}
