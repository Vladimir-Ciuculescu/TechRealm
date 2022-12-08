import { SET_ACTIVE_IMAGE, TOGGLE_GALLERY_MODAL } from './actionTypes'
import { ActionCreator } from 'redux'

export const setActiveImageAction: ActionCreator<any> = (
  url: string,
  index: number,
) => ({
  type: SET_ACTIVE_IMAGE,
  payload: { url, index },
})

export const toggleGalleryModalAction: ActionCreator<any> = () => ({
  type: TOGGLE_GALLERY_MODAL,
})
