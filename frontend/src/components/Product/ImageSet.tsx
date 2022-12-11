import React, { useEffect, useRef, useState } from 'react'

import { Image } from '../../interfaces/Image'
import { useDispatch } from 'react-redux'
import {
  setActiveImageAction,
  toggleGalleryModalAction,
} from '../../redux/product/actions'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface ImageSetProps {
  images: Image[]
}

export const ImageSet: React.FC<ImageSetProps> = ({ images }) => {
  const scrollRef = useRef<any>()

  const imagesToDisplay = images.map((item, key) => {
    return {
      ...item,
      index: key,
    }
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useDispatch()

  const changeCurrentImage = (imageUrl: string, index: number) => {
    dispatch(setActiveImageAction(imageUrl, index))
    setCurrentIndex(index)
  }

  useEffect(() => {
    console.log(currentIndex)

    dispatch(
      setActiveImageAction(
        imagesToDisplay[currentIndex].url,
        imagesToDisplay[currentIndex].index,
      ),
    )

    if (scrollRef) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [currentIndex])

  const openGalleryModal = () => {
    dispatch(toggleGalleryModalAction())
  }

  const scrollHorizontal = (direction: string) => {
    if (direction === 'right') {
      setCurrentIndex(currentIndex + 1)
    } else if (direction === 'left') {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="image-set_container">
      <button
        disabled={currentIndex === 0 ? true : false}
        onClick={() => scrollHorizontal('left')}
        className={`arrow_left-container ${
          currentIndex === 0 ? 'disabled' : ''
        }`}
      >
        <IoIosArrowBack style={{ color: '#7300e6' }} size={30} />
      </button>
      <div className="image-set_container_list" id="image-set_container_list">
        {imagesToDisplay?.map((image, key) => {
          return (
            <img
              ref={key === currentIndex ? scrollRef : null}
              onClick={openGalleryModal}
              onMouseEnter={() => changeCurrentImage(image.url, key)}
              key={key}
              className={`image-set_mini-image_container ${
                currentIndex === key ? 'selected' : ''
              }`}
              width={70}
              height={70}
              src={image.url}
              alt={''}
            />
          )
        })}
      </div>

      <button
        disabled={currentIndex === imagesToDisplay.length - 1 ? true : false}
        onClick={() => scrollHorizontal('right')}
        className={`arrow_right-container ${
          currentIndex === imagesToDisplay.length - 1 ? 'disabled' : ''
        }`}
      >
        <IoIosArrowForward style={{ color: '#7300e6' }} size={30} />
      </button>
    </div>
  )
}
