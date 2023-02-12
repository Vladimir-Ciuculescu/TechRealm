import { TOGGLE_LOGOUT_MODAL } from './actionTypes'

const logoutModalState = {
  visible: false,
}

export const logoutModalReducer = (state = logoutModalState, action: any) => {
  switch (action.type) {
    case TOGGLE_LOGOUT_MODAL:
      return {
        ...state,
        visible: !state.visible,
      }
    default:
      return state
  }
}
