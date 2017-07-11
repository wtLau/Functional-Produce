function GroceryList(list) {
    
    this.state = {
        data: list,
        originalList: {},
        stockedUpList: {},
        counted: false
    }
    Object.freeze(this.state.data)
}

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
])

GroceryList.prototype.countFruit = function () {
    if(this.state.counted) return this

    this.state.originalList = this.state.data.reduce((acc, item) => {
        acc[item[0]] ? acc[item[0]] += item[1] :
            acc[item[0]] = item[1]
        return acc
    }, {})
    Object.freeze(this.state.originalList)
    this.state.counted = true
    return this
}

GroceryList.prototype.stockUp = function (num) {
    if(!this.state.counted) this.countFruit()

    this.state.stockedUpList = Object.keys(this.state.originalList).reduce((acc, keyName) => {
        acc[keyName] = this.state.originalList[keyName] + num
        return acc
    }, {})

    return this
}

GroceryList.prototype.explain = function () {
     if(!this.state.counted) this.countFruit().stockUp(0)

    const list = Object.keys(this.state.stockedUpList)
    const explain = list.reduce((str, item, i) => {
        str += `${item}: ${this.state.stockedUpList[item]}${(list[i+1] ? ', ': '')}`
        return str
    }, '')
    console.log(explain)
    return this
}

console.time('Stocking')
data.stockUp(10).countFruit().explain().stockUp(23).explain()
console.timeEnd('Stocking')