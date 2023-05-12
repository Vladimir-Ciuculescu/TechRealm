import { ActionCreator } from 'redux'
import { User } from '../../interfaces/User'
import { SET_ROWS_PER_PAGE, SET_USERS, SET_USER_PAGES } from './actionTypes'

export const setUsersAction: ActionCreator<any> = (users: User[]) => ({
  type: SET_USERS,
  payload: users,
})

export const setRowsPerPageAction: ActionCreator<any> = (
  rowsPerPage: number,
) => ({ type: SET_ROWS_PER_PAGE, payload: rowsPerPage })

export const setUserPagesAction: ActionCreator<any> = (pages: number) => ({
  type: SET_USER_PAGES,
  payload: pages,
})
