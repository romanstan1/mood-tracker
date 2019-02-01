import { CONSTANTS } from '../constants'

export const successfulLoggedIn = (email) => dispatch =>
  dispatch({
    type: CONSTANTS.SUCCESSFUL_LOGGED_IN,
    payload: email
  })

export const updateWidth = (width) => dispatch =>
  dispatch({
    type: CONSTANTS.UPDATE_WIDTH,
    payload: width
  })
