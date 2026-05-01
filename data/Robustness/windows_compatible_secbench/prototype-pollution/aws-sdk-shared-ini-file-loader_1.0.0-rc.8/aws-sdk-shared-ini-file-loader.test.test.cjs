// //https://security.snyk.io/vuln/SNYK-JS-AWSSDKSHAREDINIFILELOADER-1049304
// test("prototype pollution in @aws-sdk/shared-ini-file-loader", () => {
console.log({}.polluted);
  var fs = require("fs");
  var sharedIniFileLoader = require("@aws-sdk/shared-ini-file-loader");

  var parsed = sharedIniFileLoader.loadSharedConfigFiles({
    filepath: "./payload.toml",
  });
  parsed.then(() => {
console.log({}.polluted);
  });
// });
