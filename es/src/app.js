import store from './redux/store'
import { addGroceryList } from './redux/actions'


let unsubscribe = store.subscribe(() =>
  console.log(JSON.stringify(store.getState())))

store.dispatch(addGroceryList([
    ['apples', 73],
    ['pears', 12],
    ['oranges', 97],
    ['grapes', 387],
    ['kiwis', 201]
]))

store.dispatch(addGroceryList([
    ['grapes', 88],
    ['pears', 34],
    ['apples', 75],
    ['grapes', 23],
    ['oranges', 86],
]))

store.dispatch(generateStockedUpList);

unsubscribe();