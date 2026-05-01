// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28283
// test("prototype pollution in libnested", () => {
console.log({}.polluted);

  const libnested = require("libnested");
  libnested.set({}, ["constructor", "prototype",  "polluted"], "yes");

console.log({}.polluted);
// });
