import { SET_ACTIVE_IMAGE } from './actionTypes'
import { ActionCreator } from 'redux'

export const setActiveImageAction: ActionCreator<any> = (
  url: string,
  index,
) => ({
  type: SET_ACTIVE_IMAGE,
  payload: { url, index },
})
