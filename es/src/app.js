import store from './redux/store'
import { addGroceryList, generateStockedUpList } from './redux/actions'


store.dispatch(addGroceryList([
    ['apples', 73],
    ['pears', 12],
    ['oranges', 97],
    ['grapes', 387],
    ['kiwis', 21]
]))

store.dispatch(addGroceryList([
    ['grapes', 88],
    ['pears', 34],
    ['apples', 75],
    ['grapes', 23],
    ['oranges', 86],
]))

store.dispatch(generateStockedUpList({ id: 1, add: 10}));
