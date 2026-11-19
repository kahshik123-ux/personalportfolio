const fs = require('fs');
const path = require('path');
const portfolioData = require('../js/data.js');

const imagePath = path.join(__dirname, '..', portfolioData.profile.photo);
if (!fs.existsSync(imagePath)) {
  console.error(`Missing profile image: ${portfolioData.profile.photo}`);
  process.exitCode = 1;
} else {
  console.log('Profile image exists on disk.');
}
