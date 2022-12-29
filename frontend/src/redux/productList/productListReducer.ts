import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from './actionTypes'

const productListState = {
  products: [],
  loading: false,
  error: '',
}

export const productListReducer = (state = productListState, action: any) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, products: [], error: action.paylod }
    default:
      return state
  }
}
