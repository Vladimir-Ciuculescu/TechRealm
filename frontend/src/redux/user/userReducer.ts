import { Roles } from '../../enums/Roles'
import { LOGOUT_USER, SET_USER, SET_USER_ACCESS } from './actionTypes'

interface userStateProps {
  firstName: string
  lastName: string
  email: string
  role: Roles | string
  photo: string
  color: string
  isLogged: boolean
  id: number
  token: string
  hasAccess: boolean
}

const userState: userStateProps = {
  id: 0,
  isLogged: false,
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  photo: '',
  color: '',
  token: '',
  hasAccess: true,
}

export const userReducer = (state = userState, action: any) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action.payload
      return {
        ...state,
        id: user.id,
        isLogged: true,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        photo: user.photo,
        role: user.role,
        color: user.color,
        token: user.token,
        hasAccess: true,
      }
    case LOGOUT_USER:
      return {
        ...state,
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        photo: '',
        color: '',
        isLogged: false,
        token: '',
        hasAccess: true,
      }
    case SET_USER_ACCESS:
      return {
        ...state,
        hasAccess: true,
      }
    default:
      return state
  }
}
