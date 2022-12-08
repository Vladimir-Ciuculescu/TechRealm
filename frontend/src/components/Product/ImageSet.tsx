import React, { useState } from 'react'

import { Image } from '../../interfaces/Image'
import { useDispatch } from 'react-redux'
import {
  setActiveImageAction,
  toggleGalleryModalAction,
} from '../../redux/product/actions'

interface ImageSetProps {
  images?: Image[]
  setActiveImage?: (index: number) => void
}

export const ImageSet: React.FC<ImageSetProps> = ({
  images,
  setActiveImage,
}) => {
  const dispatch = useDispatch()

  const changeCurrentImage = (imageUrl: string, index: number) => {
    dispatch(setActiveImageAction(imageUrl, index))
  }

  const openGalleryModal = () => {
    dispatch(toggleGalleryModalAction())
  }

  return (
    <div className="image-set_container">
      {images?.map((image, key) => {
        return (
          <img
            onClick={openGalleryModal}
            onMouseEnter={() => changeCurrentImage(image.url, key)}
            key={key}
            className="image-set_mini-image_container"
            width={70}
            height={70}
            src={image.url}
            alt={''}
          />
        )
      })}
    </div>
  )
}
