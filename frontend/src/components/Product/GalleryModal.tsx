import React, { useLayoutEffect, useRef, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { MIN_WIDTH_FULLSCREEN_MODAL } from '../../constants'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { toggleGalleryModalAction } from '../../redux/product/actions'
import { productSelector } from '../../redux/product/selectors'

export const GalleryModal: React.FC<any> = () => {
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
      <Modal.Body className="d-flex flex-row ceva">
        <div className="gallery-modal_photos-container">photos</div>
        <div className="gallery-modal_central">central photo</div>
      </Modal.Body>
    </Modal>
  )
}
