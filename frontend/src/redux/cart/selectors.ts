import { Selector, createSelector } from '@reduxjs/toolkit'
import { CartProduct } from '../../interfaces/CartProduct'
import { Product } from '../../interfaces/Product'

const cartSelector = (state: any) => state.cart

export const cartProductsSelector: Selector<any, any> = createSelector(
  [cartSelector],
  (cart) => cart.cartProducts,
)

export const cartTotalProductsSelector: Selector<any, any> = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.reduce(
      (currentValue: number, cartItem: CartProduct) =>
        currentValue + cartItem.quantity,
      0,
    ),
)

export const cartTotalCostSelector: Selector<any, any> = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.reduce(
      (currentValue: number, cartItem: CartProduct) =>
        currentValue + cartItem.price * cartItem.quantity,
      0,
    ),
)

export const cartProductsIdsSelector: Selector<any, any> = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.map((product: Product) => ({
      id: product.id,
      quantity: product.quantity,
    })),
)
