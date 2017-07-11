import sayHelloWorld from '../lib/hello_world';

sayHelloWorld();

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,1000,1002,11003];

function getEvenNumbers () {
  return  list.filter( i => !( i % 2) )
              .reverse()
              .sort((a,b) => a - b);
}

const result = getEvenNumbers(list);

console.log (result);

const studentAges = [10, 13, 14, 12, 11];

var sum = studentAges.reduce((a, b) => a + b, 0);

console.log(sum)


const team = {
  sam: 13,
  riyad: 12,
  chris: 8,
  jimmy: 4,
  ellis: 6
};

function flip () {
  return Object.keys(team).map(key => {return team[key]})
}
console.log (flip())



const newTeam = Object.keys(team)
                      .reduce((obj,key) => {
                        obj[ team[key] ] = key;
                        return obj;
                      }
                      ,{});
console.log(newTeam);

const data = [
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
];

const newData = data.countFruit().stockUp(7).explain();

console.log (newData)