const path = require('path');
const db = require(path.join(__dirname, 'database.js'));
console.log('Starting database seeding...');
db.seedDatabase();
console.log('Starting database complete. CTRL+C to exit.');
