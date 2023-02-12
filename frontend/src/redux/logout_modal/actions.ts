import { ActionCreator } from 'redux'
import { TOGGLE_LOGOUT_MODAL } from './actionTypes'

export const toggleLogoutModalAction: ActionCreator<any> = () => ({
  type: TOGGLE_LOGOUT_MODAL,
})
