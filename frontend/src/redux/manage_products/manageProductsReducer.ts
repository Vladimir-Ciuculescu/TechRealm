import { Product } from '../../interfaces/Product'
import {
  ADD_PRODUCT,
  SELECT_ALL_PRODUCTS,
  SELECT_PRODUCT,
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  UNSELECT_ALL_PRODUCTS,
  UNSELECT_PRODUCT,
} from './actionTypes'

interface manageProductsStateProps {
  products: Product[]
  selectedProduct: Product | Object
}

const manageProductsState: manageProductsStateProps = {
  products: [],
  selectedProduct: {},
}

export const manageProductsReducer = (
  state = manageProductsState,
  action: any,
) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id !== action.payload.id ? item : { ...item, checked: true },
        ),
      }
    case UNSELECT_PRODUCT:
      return {
        ...state,

        products: state.products.map((item) =>
          item.id !== action.payload.id ? item : { ...item, checked: false },
        ),
      }
    case SELECT_ALL_PRODUCTS:
      return {
        ...state,
        products: state.products.map((item) => ({ ...item, checked: true })),
      }
    case UNSELECT_ALL_PRODUCTS:
      return {
        ...state,
        products: state.products.map((item) => ({ ...item, checked: false })),
      }
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      }
    default:
      return state
  }
}
