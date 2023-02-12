import { Selector, createSelector } from '@reduxjs/toolkit'

const rootSelector = (state: any) => state

export const logoutModalSelector: Selector<any, any> = createSelector(
  [rootSelector],
  (state) => state.logoutModal,
)
