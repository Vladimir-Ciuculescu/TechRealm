import React from 'react'
import { Image } from '../../interfaces/Image'
import SwipeableViews from 'react-swipeable-views'
import { useDispatch } from 'react-redux'
import { toggleGalleryModalAction } from '../../redux/product/actions'

interface ImageSliderProps {
  images: Image[]
  activeImage: Image
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  activeImage,
}) => {
  const dispatch = useDispatch()

  const openGalleryModal = () => {
    dispatch(toggleGalleryModalAction())
  }

  return (
    <SwipeableViews index={activeImage.index} enableMouseEvents>
      {images?.map((image) => {
        return (
          <div
            onClick={openGalleryModal}
            key={image.id}
            className="image-slider_container"
          >
            <img
              src={image.url}
              className="image-slider_element"
              height={300}
              width={300}
              alt=""
            />
          </div>
        )
      })}
    </SwipeableViews>
  )
}
