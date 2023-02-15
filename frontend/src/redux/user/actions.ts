import { ActionCreator } from 'redux'
import { User } from '../../interfaces/User'
import { LOGOUT_USER, SET_USER, SET_USER_ACCESS } from './actionTypes'

export const setUserAction: ActionCreator<any> = (user: User) => ({
  type: SET_USER,
  payload: { user },
})

export const logoutUserAction: ActionCreator<any> = () => ({
  type: LOGOUT_USER,
})

export const setUserAccessAction: ActionCreator<any> = (access: boolean) => ({
  type: SET_USER_ACCESS,
  payload: access,
})
