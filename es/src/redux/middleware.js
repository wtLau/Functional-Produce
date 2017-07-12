import { ADD_GROCERY_LIST } from './actions'
import GroceryList from '../grocerylist'


export const listTransform = store => next => action => {
  if (action.type === ADD_GROCERY_LIST) {
    console.log(';heyehey')
    const list = new GroceryListApp(action.payload, action.id)
    return next(list)(store);

  }
  next(action);
}


  // 1 Detect if ADD_GROCERY_LIST action is incoming
  // 2 Detect badly formatted incoming data
  //    if incoming data is bad set action.payload to false
  // 3 change the payload to an instance of our grocery list
  // Profit
