import React, { useLayoutEffect, useRef, useState } from 'react'
import { Row, Col, Modal, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { MIN_WIDTH_FULLSCREEN_MODAL } from '../../constants'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Image } from '../../interfaces/Image'
import { toggleGalleryModalAction } from '../../redux/product/actions'
import { productSelector } from '../../redux/product/selectors'

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
      <Modal.Body className="d-flex flex-row bg-danger p-0">
        <div className="gallery-modal_photos-container">
          <div className="bg-info gallery-modal_photos-container_list">
            {images.map((image) => (
              <img
                src={image.url}
                alt=""
                className="gallery-modal_photos-container_list_element"
              />
            ))}
          </div>
          {/* <Container className="">
            <Row>
              {images.map((image) => (
                <Col>
                  <img
                    src={image.url}
                    alt=""
                    className="gallery-modal_photos-container_list_element"
                  />
                </Col>
              ))}
            </Row>
          </Container> */}
        </div>
        <div className="gallery-modal_central d-flex flex-column">
          <div className="gallery-modal_central_image">awd</div>
          <div className="gallery-modal_actions">awdwad</div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
