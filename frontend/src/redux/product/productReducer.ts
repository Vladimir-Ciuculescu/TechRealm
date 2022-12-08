import { SET_ACTIVE_IMAGE, TOGGLE_GALLERY_MODAL } from './actionTypes'

const productState = {
  activeImage: {
    url: '',
    index: 0,
  },
  galleryModal: {
    visible: false,
  },
}

export const productsReducer = (state = productState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_IMAGE:
      return {
        ...state,
        activeImage: { url: action.payload.url, index: action.payload.index },
      }
    case TOGGLE_GALLERY_MODAL:
      return {
        ...state,
        galleryModal: {
          ...state.galleryModal,
          visible: !state.galleryModal.visible,
        },
      }
    default:
      return state
  }
}
