import moment from 'moment'
import { CONSTANTS } from '../constants'
import {dates} from './modules'

export const initialState = {
  page: 0,
  today: moment().startOf('day').valueOf(),
  dates, 
  width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  isAuthenticated: false,
  user: null,
  // isAuthenticated: true,
  // user: "roman.stankiewicz@perkbox.com"
}

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
