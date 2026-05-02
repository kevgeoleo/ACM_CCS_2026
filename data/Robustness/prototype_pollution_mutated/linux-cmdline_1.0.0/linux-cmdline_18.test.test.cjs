Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const linuxCmdline = require('linux-cmdline');
linuxCmdline('__proto__.polluted=yes');
console.log({}.polluted);