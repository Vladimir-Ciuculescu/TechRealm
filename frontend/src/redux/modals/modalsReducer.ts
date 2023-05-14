import {
  SET_PRODUCT_MODAL_MODE,
  TOGGLE_DELETE_PRODUCT_MODAL,
  TOGGLE_LOGOUT_MODAL,
  TOGGLE_PRODUCT_MODAL,
  TOGGLE_DELETE_USER_MODAL,
} from './actionTypes'

interface modalStateProps {
  logoutModal: boolean
  deleteUserModal: boolean
  productModal: {
    visible: boolean
    mode: string
  }
  deleteProductModal: boolean
}

const modalsState: modalStateProps = {
  logoutModal: false,

  deleteUserModal: false,
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
    case TOGGLE_DELETE_USER_MODAL:
      return { ...state, deleteUserModal: action.payload }
    default:
      return state
  }
}
