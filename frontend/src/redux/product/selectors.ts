import { Selector, createSelector } from '@reduxjs/toolkit'

const productSelector = (state: any) => state.product

export const activeImageSelector: Selector<any, any> = createSelector(
  [productSelector],
  (product) => product.activeImage,
)

export const galleryModalSelector: Selector<any, any> = createSelector(
  [productSelector],
  (product) => product.galleryModal,
)
