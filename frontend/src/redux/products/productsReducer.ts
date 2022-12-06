import { ADD_PRODUCT_TO_CART } from './actionTypes'

const initialState = {
  products: [],
}

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, products: [...state.products, action.payload] }
    default:
      return state
  }
}
