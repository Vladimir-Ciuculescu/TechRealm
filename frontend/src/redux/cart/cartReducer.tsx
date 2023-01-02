import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes'
import { CartProduct } from '../../interfaces/CartProduct'
import { Product } from '../../interfaces/Product'

interface cartStateProps {
  cartProducts: Product[]
}

const cartState: cartStateProps = {
  cartProducts: [],
}

const addProductToCart = (cartProducts: any[], product: any) => {
  //   const alreadyInCart = cartProducts.find((item) => item.id === product.id)

  //   if(alreadyInCart){
  //     return cartProducts.map(item => {

  //     })
  //   }

  return [...cartProducts, product]
}

export const cartReducer = (state = cartState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: addProductToCart(state.cartProducts, action.payload),
      }
    default:
      return state
  }
}
