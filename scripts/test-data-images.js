const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const portfolioData = require('../js/data.js');

const imagePath = path.join(__dirname, '..', portfolioData.profile.photo);
if (!fs.existsSync(imagePath)) {
  console.error(`Missing profile image: ${portfolioData.profile.photo}`);
  process.exitCode = 1;
} else {
  console.log('Profile image exists on disk.');
}

const expectedHashes = new Set();
const categoryIds = new Set(portfolioData.mediaCategories.map(category => category.id));
for (const directory of ['assets/certificates', 'assets/team_photos']) {
  const directoryPath = path.join(__dirname, '..', directory);
  for (const filename of fs.readdirSync(directoryPath)) {
    if (!/\.jpg$/i.test(filename)) continue;
    const contents = fs.readFileSync(path.join(directoryPath, filename));
    expectedHashes.add(crypto.createHash('sha256').update(contents).digest('hex'));
  }
}

const displayedHashes = new Set();
for (const entry of portfolioData.certificates.concat(portfolioData.photos)) {
  if (!categoryIds.has(entry.category)) {
    console.error(`Unknown media category "${entry.category}" for ${entry.image}`);
    process.exitCode = 1;
  }
  if (!/\.jpg$/i.test(entry.image)) {
    console.error(`Non-photo placeholder should not be displayed: ${entry.image}`);
    process.exitCode = 1;
    continue;
  }
  const filePath = path.join(__dirname, '..', entry.image);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing portfolio media: ${entry.image}`);
    process.exitCode = 1;
    continue;
  }
  const contents = fs.readFileSync(filePath);
  displayedHashes.add(crypto.createHash('sha256').update(contents).digest('hex'));
}

for (const hash of expectedHashes) {
  if (!displayedHashes.has(hash)) {
    console.error('A unique certificate or photo asset is missing from the portfolio gallery.');
    process.exitCode = 1;
    break;
  }
}

for (const category of portfolioData.mediaCategories) {
  const hasMedia = portfolioData.certificates.concat(portfolioData.photos)
    .some(entry => entry.category === category.id);
  const hasProjects = category.id === 'aicte'
    && portfolioData.sponsoredProjects.concat(portfolioData.atalProgram).length > 0;
  if (!hasMedia && !hasProjects) {
    console.error(`Empty media category: ${category.title}`);
    process.exitCode = 1;
  }
}

if (expectedHashes.size === displayedHashes.size) {
  console.log(`All ${expectedHashes.size} unique JPEG certificate and photo assets are included.`);
} else {
  console.error(`Expected ${expectedHashes.size} unique JPEG media assets, found ${displayedHashes.size}.`);
  process.exitCode = 1;
}
