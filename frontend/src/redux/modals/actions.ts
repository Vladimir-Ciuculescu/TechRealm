import { ActionCreator } from 'redux'
import {
  SET_PRODUCT_MODAL_MODE,
  TOGGLE_DELETE_PRODUCT_MODAL,
  TOGGLE_DELETE_USER_MODAL,
  TOGGLE_LOGOUT_MODAL,
  TOGGLE_PRODUCT_MODAL,
} from './actionTypes'

export const toggleLogoutModalAction: ActionCreator<any> = (
  toggle: boolean,
) => ({ type: TOGGLE_LOGOUT_MODAL, payload: toggle })

export const toggleProductModalAction: ActionCreator<any> = (
  toggle: boolean,
) => ({
  type: TOGGLE_PRODUCT_MODAL,
  payload: toggle,
})

export const setProductModalMode: ActionCreator<any> = (mode: string) => ({
  type: SET_PRODUCT_MODAL_MODE,
  payload: mode,
})

export const toggleDeleteProductModalAction: ActionCreator<any> = (
  toggle: boolean,
) => ({ type: TOGGLE_DELETE_PRODUCT_MODAL, payload: toggle })

export const toggleDeleteUserModalAction: ActionCreator<any> = (
  toggle: boolean,
) => ({ type: TOGGLE_DELETE_USER_MODAL, payload: toggle })
