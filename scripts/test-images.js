const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const regex = /src=["']([^"']+)["']/g;
let match;
const found = [];
while ((match = regex.exec(html)) !== null) {
  found.push(match[1]);
}

console.log('Total img src attributes in index.html:', found.length);
let missing = 0;
found.forEach(src => {
  if (src.startsWith('http')) return;
  const full = path.join(__dirname, '..', src);
  if (!fs.existsSync(full)) {
    console.error('MISSING:', src);
    missing++;
  }
});

if (missing === 0) {
  console.log('ALL', found.length, 'images in index.html exist on disk!');
} else {
  console.error(missing, 'images are missing!');
}

