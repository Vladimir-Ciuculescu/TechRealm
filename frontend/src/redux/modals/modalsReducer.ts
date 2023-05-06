import {
  SET_PRODUCT_MODAL_MODE,
  TOGGLE_ADD_PRODUCT_MODAL,
  TOGGLE_DELETE_PRODUCT_MODAL,
  TOGGLE_LOGOUT_MODAL,
  TOGGLE_PRODUCT_MODAL,
} from './actionTypes'

const modalsState = {
  logoutModal: false,
  // addProductModal: false,
  productModal: {
    visible: false,
    mode: '',
  },
  deleteProductModal: false,
}

export const modalsReducer = (state = modalsState, action: any) => {
  switch (action.type) {
    case TOGGLE_LOGOUT_MODAL:
      return { ...state, logoutModal: action.payload }
    // case TOGGLE_ADD_PRODUCT_MODAL:
    //   return { ...state, addProductModal: action.payload }
    case TOGGLE_PRODUCT_MODAL:
      return {
        ...state,
        productModal: { ...state.productModal, visible: action.payload },
      }
    case SET_PRODUCT_MODAL_MODE:
      return {
        ...state,
        productModal: { ...state.productModal, mode: action.payload },
      }
    case TOGGLE_DELETE_PRODUCT_MODAL:
      return { ...state, deleteProductModal: action.payload }
    default:
      return state
  }
}
