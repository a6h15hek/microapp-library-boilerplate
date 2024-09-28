const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'package.json');
const destination = path.join(__dirname, 'views-dist', 'package.json');

// Read the source package.json file
const packageJson = JSON.parse(fs.readFileSync(source, 'utf-8'));

// Remove the scripts key
delete packageJson.scripts;

// Write the modified package.json to the destination
fs.writeFileSync(destination, JSON.stringify(packageJson, null, 2));

console.log('package.json copied to dist directory without scripts key');
