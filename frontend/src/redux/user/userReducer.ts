import { Role } from '../../enums/Role'
import { LOGOUT_USER, SET_USER } from './actionTypes'

interface userStateProps {
  firstName: string
  lastName: string
  email: string
  role: Role | string
  photo: string
  color: string
}

const userState: userStateProps = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  photo: '',
  color: '',
}

export const userReducer = (state = userState, action: any) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action.payload
      console.log(user)
      return {
        ...state,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        photo: user.photo,
        role: user.role,
        color: user.color,
      }
    case LOGOUT_USER:
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        photo: '',
        color: '',
      }
    default:
      return state
  }
}
