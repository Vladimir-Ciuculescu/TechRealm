import { ActionCreator } from 'redux'
import { SET_SUBMENU, TOGGLE_MENU } from './actionTypes'

export const toggleMenuAction: ActionCreator<any> = (toggle: boolean) => ({
  type: TOGGLE_MENU,
  payload: { toggle },
})

export const setSubMenuAction: ActionCreator<any> = (subMenu) => ({
  type: SET_SUBMENU,
  payload: { subMenu },
})
