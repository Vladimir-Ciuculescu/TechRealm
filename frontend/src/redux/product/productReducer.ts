import { ADD_PRODUCT_TO_CART, SET_ACTIVE_IMAGE } from './actionTypes'

const initialState = {
  activeImage: {
    url: '',
    index: 0,
  },
}

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_IMAGE:
      return {
        ...state,
        activeImage: { url: action.payload.url, index: action.payload.index },
      }
    default:
      return state
  }
}
