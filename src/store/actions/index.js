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

export const addUserAndDate = (user, dates) => dispatch =>
  dispatch({
    type: CONSTANTS.ADD_USER_AND_DATA,
    payload: { user, dates}
  })
