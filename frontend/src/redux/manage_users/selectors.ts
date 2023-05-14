import { Selector, createSelector } from '@reduxjs/toolkit'

const manageUsersSelector = (state: any) => state.manageUsers

export const usersSelector: Selector<any, any> = createSelector(
  [manageUsersSelector],
  (manageUsers) => manageUsers.users,
)

export const filterObjectSelector: Selector<any, any> = createSelector(
  [manageUsersSelector],
  (manageUsers) => manageUsers.filterObject,
)

export const currentUserSelector: Selector<any, any> = createSelector(
  [manageUsersSelector],
  (manageUsers) => manageUsers.currentUser,
)
