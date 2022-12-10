import React from 'react'
import { Image } from '../../interfaces/Image'
import SwipeableViews from 'react-swipeable-views'
import { useSelector } from 'react-redux'
import { productSelector } from '../../redux/product/selectors'
import { useDispatch } from 'react-redux'
import { toggleGalleryModalAction } from '../../redux/product/actions'
import { useWindowWidth } from '../../hooks/useWindowWidth'

interface ImageSliderProps {
  images: Image[]
  activeImage: Image
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  activeImage,
}) => {
  const dispatch = useDispatch()

  const innerWidth = useWindowWidth()

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
              srcSet=""
              src={image.url}
              className="image-slider_element"
              height={500}
              width={500}
              alt=""
            />
          </div>
        )
      })}
    </SwipeableViews>
  )
}
