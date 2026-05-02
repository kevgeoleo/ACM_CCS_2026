Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const dots = require('dot-notes');
dots.create({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);