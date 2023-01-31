import { Selector, createSelector } from '@reduxjs/toolkit'

const rootSelector = (state: any) => state

export const userSelector: Selector<any, any> = createSelector(
  [rootSelector],
  (state) => state.user,
)

export const userInitialsSelector: Selector<any, any> = createSelector(
  [userSelector],
  (user) =>
    user.firstName.charAt(0).toUpperCase() +
    user.lastName.charAt(0).toUpperCase(),
)

export const isUserLoggedSelector: Selector<any, any> = createSelector(
  [userSelector],
  (user) => user.isLogged,
)

export const userIdSelector: Selector<any, any> = createSelector(
  [userSelector],
  (user) => user.id,
)
