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
    default:
      return state;
  }
}
