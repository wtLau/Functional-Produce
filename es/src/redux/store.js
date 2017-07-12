import { createStore }     from 'redux'
import { GroceryListApp } from './reducer'
import logger from 'redux-logger'


const store = createStore(
  reducer,
  applyMiddleware(logger)
)


export default createStore(GroceryListApp) 