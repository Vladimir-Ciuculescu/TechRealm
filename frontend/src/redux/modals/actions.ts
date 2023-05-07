import { ActionCreator } from 'redux'
import {
  SET_PRODUCT_MODAL_MODE,
  TOGGLE_DELETE_PRODUCT_MODAL,
  TOGGLE_LOGOUT_MODAL,
  TOGGLE_PRODUCT_MODAL,
} from './actionTypes'

export const toggleLogoutModalAction: ActionCreator<any> = (
  toggle: boolean,
) => ({ type: TOGGLE_LOGOUT_MODAL, payload: toggle })

export const toggleProductModal: ActionCreator<any> = (toggle: boolean) => ({
  type: TOGGLE_PRODUCT_MODAL,
  payload: toggle,
})

export const setProductModalMode: ActionCreator<any> = (mode: string) => ({
  type: SET_PRODUCT_MODAL_MODE,
  payload: mode,
})

export const toggleDeleteProductModal: ActionCreator<any> = (
  toggle: boolean,
) => ({ type: TOGGLE_DELETE_PRODUCT_MODAL, payload: toggle })
