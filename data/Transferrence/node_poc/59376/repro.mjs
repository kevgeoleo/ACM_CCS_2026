import { inspect } from 'util';

const values = [0.1234, -0.12, -0.123, -0.1234, -1.234];
const text = inspect(values, { numericSeparator: true });
console.log(text);
