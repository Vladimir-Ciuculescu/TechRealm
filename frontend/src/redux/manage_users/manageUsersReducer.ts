import { ROWS_PER_PAGE_OPTIONS } from '../../consts/filters/filters'
import { User } from '../../interfaces/User'
import { SET_ROWS_PER_PAGE, SET_USERS } from './actionTypes'

interface manageUserStateProps {
  users: User[]
  filterObject: Object
}

const manageUsersState: manageUserStateProps = {
  users: [],
  filterObject: { rowsPerPage: ROWS_PER_PAGE_OPTIONS[0], pages: 0 },
}

export const manageUsersReducer = (state = manageUsersState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload }
    case SET_ROWS_PER_PAGE:
      return {
        ...state,
        filterObject: { ...state.filterObject, rowsPerPage: action.payload },
      }
    default:
      return state
  }
}
