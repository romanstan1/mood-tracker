import { CONSTANTS } from '../constants'

export const successfulLoggedIn = (user) => dispatch =>
  dispatch({
    type: CONSTANTS.SUCCESSFUL_LOGGED_IN,
    payload: user
  })

export const updateWidth = (width) => dispatch =>
  dispatch({
    type: CONSTANTS.UPDATE_WIDTH,
    payload: width
  })
