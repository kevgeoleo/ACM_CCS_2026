const { writeFileSync, existsSync, readdirSync } = require('node:fs');
const { globSync } = require('node:fs');

// Create a filename with non-UTF8 bytes (0xe9 alone is invalid in UTF-8)
const path = Buffer.from([0xe9]);

// Write a file with that raw byte name
writeFileSync(path, 'hello');

// Confirm the file exists using the same Buffer path
console.log('existsSync(Buffer.from([0xe9])):', existsSync(path));

// Now use globSync to list files matching a pattern that should include this file
const results = globSync('[^a-z]');
console.log('globSync("[^a-z]") results:', results);

// Also show what readdirSync returns for comparison
const dirEntries = readdirSync('.', { withFileTypes: false });
console.log('readdirSync(".") results:', dirEntries);