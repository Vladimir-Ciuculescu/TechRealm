import { ROWS_PER_PAGE_OPTIONS } from '../../consts/filters/filters'
import { User } from '../../interfaces/User'
import {
  SET_CURRENT_USER,
  SET_ROWS_PER_PAGE,
  SET_USERS,
  SET_USER_PAGES,
} from './actionTypes'

interface manageUserStateProps {
  users: User[]
  currentUser: User | Object
  filterObject: Object
}

const manageUsersState: manageUserStateProps = {
  users: [],
  currentUser: {},
  filterObject: { rowsPerPage: ROWS_PER_PAGE_OPTIONS[0], pages: 0 },
}

export const manageUsersReducer = (state = manageUsersState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload }
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        filterObject: { ...state.filterObject, rowsPerPage: action.payload },
      }
    case SET_USER_PAGES:
      return {
        ...state,
        filterObject: { ...state.filterObject, pages: action.payload },
      }
    default:
      return state
  }
}
