import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Row, Col, Modal, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { MIN_WIDTH_FULLSCREEN_MODAL } from '../../constants'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Image } from '../../interfaces/Image'
import {
  setActiveImageAction,
  toggleGalleryModalAction,
} from '../../redux/product/actions'
import { productSelector } from '../../redux/product/selectors'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface GalleryModalProps {
  images: Image[]
  activeImage?: Image
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  activeImage,
}) => {
  const innerWidth = useWindowWidth()
  const dispatch = useDispatch()
  const [currentIndex, setCurrentIndex] = useState(0)

  const imagesToDisplay = images.map((item, key) => {
    return { ...item, index: key }
  })

  const displayFullModal = innerWidth < MIN_WIDTH_FULLSCREEN_MODAL

  const {
    galleryModal: { visible },
  } = useSelector(productSelector)

  const closeGalleryModal = () => {
    dispatch(toggleGalleryModalAction())
  }

  const changeCurrentImage = (imageUrl: string, index: number) => {
    dispatch(setActiveImageAction(imageUrl, index))
    setCurrentIndex(index)
  }

  useEffect(() => {
    dispatch(
      setActiveImageAction(
        imagesToDisplay[currentIndex].url,
        images[currentIndex].index,
      ),
    )
  }, [currentIndex])

  const renderActionButtons = () => {}

  return (
    <Modal
      fullscreen={displayFullModal ? true : undefined}
      show={visible}
      size="lg"
      centered={displayFullModal ? false : true}
      contentClassName={
        displayFullModal ? '' : 'gallery-modal_container_height'
      }
      dialogClassName={!displayFullModal ? 'gallery-modal_container_width' : ''}
    >
      <Modal.Header closeButton onClick={closeGalleryModal}></Modal.Header>
      <Modal.Body className="d-flex flex-row p-0">
        <div className="photos-container">
          <div className="photos-container_list">
            {imagesToDisplay.map((image) => (
              <img
                onClick={() => changeCurrentImage(image.url, image.index)}
                src={image.url}
                alt=""
                className={`photos-container_list_element ${
                  currentIndex === image.index ? 'selected' : ''
                }`}
              />
            ))}
          </div>
        </div>
        <div className="image-display">
          <div className="image-display_container">
            <button
              onClick={() => setCurrentIndex(currentIndex - 1)}
              className={`image-display_arrow-left-container ${
                currentIndex === 0 ? 'disabled' : ''
              }`}
              disabled={currentIndex === 0 ? true : false}
            >
              <IoIosArrowBack style={{ color: '#7300e6' }} size={30} />
            </button>
            <img
              src={activeImage?.url}
              alt=""
              className="image-display_container_photo"
            />
            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className={`image-display_arrow-right-container ${
                currentIndex === imagesToDisplay.length - 1 ? 'disabled' : ''
              }`}
              disabled={
                currentIndex === imagesToDisplay.length - 1 ? true : false
              }
            >
              <IoIosArrowForward style={{ color: '#7300e6' }} size={30} />
            </button>
          </div>
          <div className="image-display_actions">
            <button className="ceva">Add to cart</button>
            <div className="altceva">
              <button>awdwa</button>
              <button>awdwa</button>
              <button>awdwa</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
