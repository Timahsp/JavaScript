const yargs = require('yargs');
const {add,subtract} = require('./Calculator');

const options = yargs(process.yargs)

console.log(add(5,10))
console.log(subtract(10,5))
