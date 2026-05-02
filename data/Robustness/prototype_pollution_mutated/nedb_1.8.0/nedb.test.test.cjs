// //https://security.snyk.io/vuln/SNYK-JS-TSNODASH-1311009
// test("prototype pollution in nedb", () => {
  const Datastore = require("nedb");
  const db = new Datastore();

console.log({}.polluted);

  db.insert({ hello: "world" }, (err) => {
    db.update(
      { hello: "world" },
      { $set: { "__proto__.polluted": "yes" } },
      {},
      (err) => {
console.log({}.polluted);
      }
    );
  });
// });
