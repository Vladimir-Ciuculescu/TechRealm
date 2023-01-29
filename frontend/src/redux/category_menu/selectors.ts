import { Selector, createSelector } from '@reduxjs/toolkit'

const rootSelector = (state: any) => state.categoryMenu

export const visibilitySelector: Selector<any, any> = createSelector(
  [rootSelector],
  (state) => state.visible,
)

export const subMenuSelector: Selector<any, any> = createSelector(
  [rootSelector],
  (state) => state.subMenu,
)
