// Action Constants

export const SET_GROCERY_LIST_DATA      = 'SET_GROCERY_LIST_DATA'
export const GENERATE_COUNTED_LIST      = 'GENERATE_COUNTED_LIST'
export const GENERATE_STOCK_UP_LIST     = 'GENERATE_STOCK_UP_LIST'


// Action Creators

export function setGroceryListData(data) {
  return {
    type:     SET_GROCERY_LIST_DATA,
    payload:  data
  }
}

export function generateCountedList() {
  return {
    type:     GENERATE_COUNTED_LIST
  }
}

export function generateStockedUpList() {
  return {
    type:     GENERATE_STOCK_UP_LIST
  }
}

