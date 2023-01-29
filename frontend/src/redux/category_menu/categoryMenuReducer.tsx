import { TOGGLE_MENU } from './actionTypes'

const categoryMenuState = {
  visible: false,
}

export const categoryMenuReducer = (state = categoryMenuState, action: any) => {
  switch (action.type) {
    case TOGGLE_MENU:
      const { toggle } = action.payload
      return {
        ...state,
        visible: toggle,
      }
    default:
      return state
  }
}
