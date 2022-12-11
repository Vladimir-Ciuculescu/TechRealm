import React, { useLayoutEffect, useRef, useState } from 'react'
import { Row, Col, Modal, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { MIN_WIDTH_FULLSCREEN_MODAL } from '../../constants'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Image } from '../../interfaces/Image'
import { toggleGalleryModalAction } from '../../redux/product/actions'
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

  const displayFullModal = innerWidth < MIN_WIDTH_FULLSCREEN_MODAL

  const {
    galleryModal: { visible },
  } = useSelector(productSelector)

  const closeGalleryModal = () => {
    dispatch(toggleGalleryModalAction())
  }

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
            {images.map((image) => (
              <img
                src={image.url}
                alt=""
                className="photos-container_list_element"
              />
            ))}
          </div>
        </div>
        <div className="image-display">
          <div className="image-display_container">
            <button className="image-display_arrow-left-container">
              <IoIosArrowBack style={{ color: '#7300e6' }} size={30} />
            </button>
            <img src={activeImage?.url} alt="" />
            <button className="image-display_arrow-right-container">
              <IoIosArrowForward style={{ color: '#7300e6' }} size={30} />
            </button>
          </div>
          <div className="image-display_actions">adww</div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
