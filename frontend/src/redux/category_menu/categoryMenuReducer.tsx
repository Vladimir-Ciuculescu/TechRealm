import { SET_SUBMENU, TOGGLE_MENU } from './actionTypes'

const categoryMenuState = {
  visible: false,
  subMenu: [],
}

export const categoryMenuReducer = (state = categoryMenuState, action: any) => {
  switch (action.type) {
    case TOGGLE_MENU:
      const { toggle } = action.payload
      return {
        ...state,
        visible: toggle,
      }
    case SET_SUBMENU:
      const { subMenu } = action.payload
      return {
        ...state,
        subMenu: subMenu,
      }
    default:
      return state
  }
}
