import { ActionCreator } from 'redux'
import { User } from '../../interfaces/User'
import { LOGOUT_USER, SET_USER } from './actionTypes'

export const setUserAction: ActionCreator<any> = (user: User) => ({
  type: SET_USER,
  payload: { user },
})

export const logoutUserAction: ActionCreator<any> = () => ({
  type: LOGOUT_USER,
})
