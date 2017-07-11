const data = new GroceryList([
  ['apples', 73],
  ['pears', 12],
  ['oranges', 97],
  ['grapes', 387],
  ['grapes', 88],
  ['pears', 33],
  ['apples', 75],
  ['grapes', 23],
  ['oranges', 86],
  ['kiwis', 201]
]);

Array.prototype.countFruit = function() {
  return this.reduce((acc, item) => {
    acc[item[0]] ? acc[item[0]] += item[1]:
                   acc[item[0]] = item[1]
                   return acc
  }, {})
  //return { apples: 148, pears: 45, oranges: 183, grapes: 498, kiwis: 201 }
}

// Object.prototype.stockUp = function(num) {
//   let obj = {}
//   Object.keys(this).forEach(itemName => {
//     obj[itemName] = this[itemName] + num
//   })
//     return obj
//   // adds an identical amount of fruit to each category 5
//   // After {apples: 153, pears: 50, oranges: 188, grapes: 503, kiwis: 206}
// }

Object.prototype.stockUp = function(num) {
  return Object.keys(this).reduce((acc, keyName) => {
    acc[keyName] = this[keyName] + num
    return acc
  }, {})
}

Object.prototype.explain = function() {
  let explain = ''
  const names = Object.keys(this)
  names.forEach((itemName, i) => {
    explain += itemName +': ' + this[itemName] + (names[i+1] ? ', ': '')
  })
  return explain
}

console.time('Stocking')
console.log(data.countFruit().stockUp(10))
console.timeEnd('Stocking')
