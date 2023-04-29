import { ActionCreator } from 'redux'
import {
  TOGGLE_ADD_PRODUCT_MODAL,
  TOGGLE_DELETE_PRODUCT_MODAL,
  TOGGLE_LOGOUT_MODAL,
} from './actionTypes'

export const toggleLogoutModalAction: ActionCreator<any> = (
  toggle: boolean,
) => ({ type: TOGGLE_LOGOUT_MODAL, payload: toggle })

export const toggleAddProductModal: ActionCreator<any> = (toggle: boolean) => ({
  type: TOGGLE_ADD_PRODUCT_MODAL,
  payload: toggle,
})

export const toggleDeleteProductModal: ActionCreator<any> = (
  toggle: boolean,
) => ({ type: TOGGLE_DELETE_PRODUCT_MODAL, payload: toggle })
