import { ActionCreator } from 'redux'
import { TOGGLE_MENU } from './actionTypes'

export const toggleMenuAction: ActionCreator<any> = (toggle: boolean) => ({
  type: TOGGLE_MENU,
  payload: { toggle },
})
