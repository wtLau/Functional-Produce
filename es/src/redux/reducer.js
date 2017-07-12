import groceryList from '../grocerylist'
import {
  SET_GROCERY_LIST_DATA, 
  GENERATE_COUNTED_LIST,    
  GENERATE_STOCK_UP_LIST,
  ADD_GROCERY_LIST
} from './actions'

const initialState = {
  groceryLists: {}
}

export function GroceryListApp(state= initialState, action) {
  switch(action.type){
    case ADD_GROCERY_LIST:
      const newState = {
        ...state, groceryList: {
          ...state.groceryList, 
          ...action.payload
        }
      }
      newState.groceryLists[action.id] = action.payload
      return newState

    case SET_GROCERY_LIST_DATA:

    case GENERATE_COUNTED_LIST:

    case GENERATE_STOCK_UP_LIST:
      const stock = {...state }
      stock.groceryLists[action.payload.id].stockUp(action.payload.add)
      return stock;

    default:
      return state
  }
}