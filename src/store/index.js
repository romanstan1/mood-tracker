import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import {history} from '../App'
import rootReducer from './reducers'

const logger = store => next => action => {
  let result = next(action)
  console.log(`%c${action.type}`, "background: #c1c1c1; color: #2218af", action.payload)
  console.log("%cstore", "background: #222; color: #bada55", store.getState().data)
  console.log(" ")
  return result
}

const middleware = [
  thunk,
  routerMiddleware(history),
  logger
]

const composedEnhancers = compose(
  applyMiddleware(...middleware)
)

const store = createStore(
  rootReducer,
  composedEnhancers
)

export default store
