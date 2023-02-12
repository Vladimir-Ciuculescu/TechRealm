import { Roles } from '../../enums/Roles'
import { LOGOUT_USER, SET_USER } from './actionTypes'

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
      }
    default:
      return state
  }
}
