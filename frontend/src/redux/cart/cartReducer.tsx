import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_QUANTITY_PRODUCT,
} from './actionTypes'
import { Product } from '../../interfaces/Product'

interface cartStateProps {
  cartProducts: Product[]
}

const cartState: cartStateProps = {
  cartProducts: [],
}

const addProductToCart = (cartProducts: Product[], payload: any) => {
  const { product } = payload
  const alreadyInCart = cartProducts.find(
    (cartItem) => cartItem.id === product.id,
  )

  if (alreadyInCart) {
    return cartProducts.map((cartItem) =>
      cartItem.id === product.id && cartItem.quantity
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
  }

  return [...cartProducts, { ...product, quantity: 1 }]
}

const removeProductFromCart = (cartProducts: Product[], payload: any) => {
  const { product } = payload
  return cartProducts.filter((cartItem) => cartItem.id !== product.id)
}

const setQuantityProductFromCart = (cartProducts: Product[], payload: any) => {
  const { product, quantity } = payload

  return cartProducts.map((cartItem) =>
    cartItem.id === product.id ? { ...cartItem, quantity: quantity } : cartItem,
  )
}

export const cartReducer = (state = cartState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: addProductToCart(state.cartProducts, action.payload),
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: removeProductFromCart(state.cartProducts, action.payload),
      }

    case SET_QUANTITY_PRODUCT:
      console.log('awdaw')
      return {
        ...state,
        cartProducts: setQuantityProductFromCart(
          state.cartProducts,
          action.payload,
        ),
      }
    default:
      return state
  }
}
