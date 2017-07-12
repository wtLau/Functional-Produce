import { createStore, applyMiddleware }     from 'redux'
import { GroceryListApp } from './reducer'
import logger from 'redux-logger'


export default createStore(
  GroceryListApp,
  applyMiddleware(logger)
)


