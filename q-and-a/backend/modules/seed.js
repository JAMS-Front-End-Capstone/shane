const path = require('path');
const db = require(path.join(__dirname, 'database.js'));

console.log('Seeding database...');
db.seedDatabase();
console.log('Database seeded. Press CTRL+C to quit.');
