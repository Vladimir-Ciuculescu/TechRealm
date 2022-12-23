import React, { useEffect, useRef, useState } from 'react'

import { Image } from '../../interfaces/Image'
import { useDispatch } from 'react-redux'
import {
  setActiveImageAction,
  toggleGalleryModalAction,
} from '../../redux/product/actions'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Box, IconButton } from '@mui/material'

interface ImageSetProps {
  images: Image[]
}

export const ImageSet: React.FC<ImageSetProps> = ({ images }) => {
  const scrollRef = useRef<any>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
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

  const imagesToDisplay = images.map((item, key) => {
    return {
      ...item,
      index: key,
    }
  })

  const isFirstImage = currentIndex === 0
  const isLastImage = currentIndex === images.length - 1

  const changeCurrentImage = (imageUrl: string, index: number) => {
    dispatch(setActiveImageAction(imageUrl, index))
    setCurrentIndex(index)
  }

  const openGalleryModal = () => {
    dispatch(toggleGalleryModalAction())
  }

  const scrollHorizontal = (direction: string) => {
    switch (direction) {
      case 'left':
        setCurrentIndex(currentIndex - 1)
        break
      case 'right':
        setCurrentIndex(currentIndex + 1)
        break
      default:
        setCurrentIndex(0)
        break
    }
  }

  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <IconButton
        disabled={isFirstImage}
        onClick={() => scrollHorizontal('left')}
        color="primary"
        sx={{
          width: '12%',
          borderRadius: 2,
          '&:hover': { boxShadow: 2 },
        }}
        disableRipple
      >
        <IoIosArrowBack />
      </IconButton>

      <Box
        sx={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',

          columnGap: 2,
        }}
      >
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
      </Box>

      <IconButton
        onClick={() => scrollHorizontal('right')}
        sx={{
          width: '12%',
          borderRadius: 2,
          '&:hover': { boxShadow: 2 },
        }}
        disableRipple
        color="primary"
        disabled={isLastImage}
      >
        <IoIosArrowForward />
      </IconButton>
    </Box>
  )
}
