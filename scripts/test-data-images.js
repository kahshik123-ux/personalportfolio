const fs = require('fs');
const path = require('path');

const dataFile = fs.readFileSync(path.join(__dirname, '..', 'js', 'data.js'), 'utf8');
eval(dataFile + '; global.data = portfolioData;');

let total = 0;
let missing = 0;

function checkUrl(url, label) {
  if (!url || typeof url !== 'string' || url.startsWith('http') || url.startsWith('data:')) return;
  total++;
  const full = path.join(__dirname, '..', url);
  if (!fs.existsSync(full)) {
    console.error(`MISSING [${label}]: ${url}`);
    missing++;
  }
}

// Profile
checkUrl(data.profile.photo, 'profile');

// NPTEL
data.nptelStars.forEach(n => {
  checkUrl(n.image, `nptel ${n.id}`);
});

// Resource
data.resourcePerson.forEach(r => {
  checkUrl(r.image, `resource ${r.id}`);
});

// Hackathons
data.hackathons.forEach(h => {
  checkUrl(h.image, `hackathon img ${h.id}`);
  checkUrl(h.certImage, `hackathon cert ${h.id}`);
});

// Funding
data.funding.forEach(f => {
  checkUrl(f.image, `funding ${f.id}`);
});

// Awards
data.awards.forEach(a => {
  checkUrl(a.photo, `award ${a.id}`);
  checkUrl(a.certImage, `award cert ${a.id}`);
});

console.log(`Checked ${total} references in js/data.js.`);
if (missing === 0) {
  console.log('ALL images referenced in js/data.js exist on disk!');
} else {
  console.error(`${missing} images missing from js/data.js`);
}
