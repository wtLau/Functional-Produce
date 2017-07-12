import { createStore, applyMiddleware }     from 'redux'
import { GroceryListApp } from './reducer'

import logger from 'redux-logger'
import { listTransform } from './middleware'

export default createStore(
  GroceryListApp,
  applyMiddleware(
    logger,
    listTransform
  )
)


