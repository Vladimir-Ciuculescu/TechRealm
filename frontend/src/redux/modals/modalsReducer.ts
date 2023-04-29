import {
  TOGGLE_ADD_PRODUCT_MODAL,
  TOGGLE_DELETE_PRODUCT_MODAL,
  TOGGLE_LOGOUT_MODAL,
} from './actionTypes'

const modalsState = {
  logoutModal: false,
  addProductModal: false,
  deleteProductModal: false,
}

export const modalsReducer = (state = modalsState, action: any) => {
  switch (action.type) {
    case TOGGLE_LOGOUT_MODAL:
      return { ...state, logoutModal: action.payload }
    case TOGGLE_ADD_PRODUCT_MODAL:
      return { ...state, addProductModal: action.payload }
    case TOGGLE_DELETE_PRODUCT_MODAL:
      return { ...state, deleteProductModal: action.payload }
    default:
      return state
  }
}
