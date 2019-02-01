import { CONSTANTS } from '../constants'
import {initialState} from "./initialState"

export default function databaseReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.UPDATE_WIDTH: {
      return {
        ...state,
        width:action.payload
      }
    }
    case CONSTANTS.SUCCESSFUL_LOGGED_IN: {
      return {
        ...state,
        isAuthenticated:true,
        user: action.payload
      }
    }
    case CONSTANTS.ADD_USER_AND_DATA: {
      return {
        ...state,
        myUserData: {
          ...state.myUserData,
          email: action.payload.user.email,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          dates: action.payload.dates
        }
      }
    }
    default:
      return state;
  }
}
