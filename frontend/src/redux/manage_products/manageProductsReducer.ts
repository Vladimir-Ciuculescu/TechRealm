import { Product } from '../../interfaces/Product'
import { SELECT_PRODUCT, UNSELECT_PRODUCT } from './actionTypes'

const manageProductsState = {
  productsSelected: [],
}

export const manageProductsReducer = (
  state = manageProductsState,
  action: any,
) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        productsSelected: [...state.productsSelected, action.payload],
      }
    case UNSELECT_PRODUCT:
      return {
        ...state,
        productsSelected: state.productsSelected.filter(
          (product: Product) => product.id !== action.payload.id,
        ),
      }
    default:
      return state
  }
}
