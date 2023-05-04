import { ROWS_PER_PAGE_OPTIONS } from '../../consts/filters/filters'
import { Product } from '../../interfaces/Product'
import {
  ADD_PRODUCT,
  SELECT_ALL_PRODUCTS,
  SELECT_PRODUCT,
  SET_PRODUCTS,
  SET_ROWS_PER_PAGE,
  SET_SELECTED_PRODUCT,
  UNSELECT_ALL_PRODUCTS,
  UNSELECT_PRODUCT,
} from './actionTypes'

interface manageProductsStateProps {
  products: Product[]
  filterObject: Object
  selectedProducts: Product[] | []
}

const manageProductsState: manageProductsStateProps = {
  products: [],
  filterObject: { rowsPerPage: ROWS_PER_PAGE_OPTIONS[0] },
  selectedProducts: [],
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
        selectedProducts: action.payload,
      }
    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        filterObject: { ...state.filterObject, rowsPerPage: action.payload },
      }
    default:
      return state
  }
}
