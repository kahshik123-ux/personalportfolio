// Application Logic for Dr. R. Senthilkumar Academic Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  loadCustomizedImages();
  renderProfile();
  renderNptelSection();
  renderResourcePerson();
  renderHackathons();
  renderFunding();
  renderAwards();
  renderPublicationsAndPatents();
  renderExperienceAndAcademics();
  renderCourses();
  renderGallery();
  initNavigation();
  initScrollTop();
  initModal();
  initUploader();
}

// ---------------- LOCAL STORAGE IMAGE OVERRIDES ----------------
function getCustomImages() {
  try {
    const saved = localStorage.getItem('senthilkumar_portfolio_images');
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function saveCustomImage(id, dataUrl) {
  try {
    const images = getCustomImages();
    images[id] = dataUrl;
    localStorage.setItem('senthilkumar_portfolio_images', JSON.stringify(images));
  } catch (e) {
    console.warn('Storage quota exceeded or error saving image', e);
  }
}

function loadCustomizedImages() {
  const images = getCustomImages();
  if (images['profile_photo']) {
    portfolioData.profile.photo = images['profile_photo'];
  }
  // Apply to hackathons, certificates, etc.
  portfolioData.hackathons.forEach(h => {
    if (images[h.id]) h.image = images[h.id];
    if (images[h.id + '_cert']) h.certImage = images[h.id + '_cert'];
  });
  portfolioData.nptelStars.forEach(n => {
    if (images[n.id]) n.image = images[n.id];
  });
  portfolioData.funding.forEach(f => {
    if (images[f.id]) f.image = images[f.id];
  });
  portfolioData.resourcePerson.forEach(r => {
    if (images[r.id]) r.image = images[r.id];
  });
}

// ---------------- RENDER PROFILE ----------------
function renderProfile() {
  const p = portfolioData.profile;
  const avatarImg = document.getElementById('facultyAvatarImg');
  if (avatarImg) avatarImg.src = p.photo;

  const facultyName = document.getElementById('facultyNameDisplay');
  if (facultyName) {
    facultyName.innerHTML = `${p.name} <span class="faculty-degrees">${p.degrees}</span>`;
  }

  const facultyDesig = document.getElementById('facultyDesigDisplay');
  if (facultyDesig) facultyDesig.textContent = p.title;

  const facultyInst = document.getElementById('facultyInstDisplay');
  if (facultyInst) {
    facultyInst.innerHTML = `
      <span class="institution-icon">🏛️</span>
      <span>${p.institution}</span>
    `;
  }

  // Personal Details Grid
  const personalGrid = document.getElementById('personalDetailsGrid');
  if (personalGrid) {
    personalGrid.innerHTML = `
      <div class="info-chip">
        <span class="chip-icon">📅</span>
        <div class="chip-content">
          <span class="chip-label">DOB:</span>
          <span>${p.dob}</span>
        </div>
      </div>
      <div class="info-chip">
        <span class="chip-icon">💍</span>
        <div class="chip-content">
          <span class="chip-label">Marital Status:</span>
          <span>${p.maritalStatus}</span>
        </div>
      </div>
      <div class="info-chip">
        <span class="chip-icon">🇮🇳</span>
        <div class="chip-content">
          <span class="chip-label">Nationality:</span>
          <span>${p.nationality}</span>
        </div>
      </div>
      <div class="info-chip">
        <span class="chip-icon">🗣️</span>
        <div class="chip-content">
          <span class="chip-label">Languages:</span>
          <span>${p.languages}</span>
        </div>
      </div>
      <div class="info-chip full-width">
        <span class="chip-icon">📍</span>
        <div class="chip-content">
          <span class="chip-label">Address:</span>
          <span>${p.location}</span>
        </div>
      </div>
      <div class="info-chip">
        <span class="chip-icon">📞</span>
        <div class="chip-content">
          <span class="chip-label">Contact:</span>
          <a href="tel:${p.contact.replace(/\s+/g, '')}" class="chip-val-link">${p.contact}</a>
        </div>
      </div>
      <div class="info-chip highlight-email">
        <span class="chip-icon">✉️</span>
        <div class="chip-content">
          <span class="chip-label">Email:</span>
          <a href="mailto:${p.email}" class="chip-val-link">${p.email}</a>
        </div>
      </div>
    `;
  }

  // Stats
  const statsStrip = document.getElementById('profileStatsStrip');
  if (statsStrip) {
    statsStrip.innerHTML = p.stats.map(s => `
      <div class="stat-card">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }
}

// ---------------- RENDER NPTEL STAR (Screenshot 2) ----------------
function renderNptelSection() {
  const container = document.getElementById('nptelCardsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.nptelStars.map((item, idx) => `
    <div class="academic-card card-vertical" onclick="openItemModal('nptel', '${item.id}')">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="card-preview-img" loading="lazy">
        <span class="card-pill-tag">${item.tag}</span>
        <div class="card-zoom-indicator">
          <span>🔍 View Certificate</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-subtitle">${item.subtitle}</div>
        <div class="card-org-line">${item.issuer} • ${item.date}</div>
        <div class="card-award-highlight">
          <span>★</span> <span>${item.highlight}</span>
        </div>
        <div class="card-footer-action">
          <span class="view-details-btn">View Honors &rarr;</span>
          <button class="replace-photo-link" onclick="triggerReplaceImage(event, '${item.id}', '${item.title}')">
            📷 Replace
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------------- RENDER RESOURCE PERSON (Screenshot 3) ----------------
function renderResourcePerson() {
  const container = document.getElementById('resourcePersonCardsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.resourcePerson.map(item => `
    <div class="academic-card" onclick="openItemModal('resource', '${item.id}')">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="card-preview-img" loading="lazy">
        <span class="card-date-badge">${item.date}</span>
        <div class="card-zoom-indicator">
          <span>🔍 View Details</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-subtitle">${item.role}</div>
        <div class="card-org-line">${item.organization}</div>
        <div class="card-footer-action">
          <span class="view-details-btn">Details &rarr;</span>
          <button class="replace-photo-link" onclick="triggerReplaceImage(event, '${item.id}', '${item.title}')">
            📷 Replace
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------------- RENDER HACKATHONS (Screenshot 4) ----------------
function renderHackathons() {
  const container = document.getElementById('hackathonCardsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.hackathons.map(item => `
    <div class="academic-card" onclick="openItemModal('hackathon', '${item.id}')">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="card-preview-img" loading="lazy">
        <span class="card-pill-tag">${item.badge}</span>
        <div class="card-zoom-indicator">
          <span>🏆 View Team &amp; Certificate</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-subtitle">${item.project}</div>
        <div class="card-org-line">${item.team} | ${item.psid}</div>
        <div class="card-award-highlight">
          <span>🏆</span> <span>${item.award}</span>
        </div>
        <div class="card-footer-action">
          <span class="view-details-btn">View Win &amp; Certificate &rarr;</span>
          <button class="replace-photo-link" onclick="triggerReplaceImage(event, '${item.id}', '${item.title}')">
            📷 Replace
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------------- RENDER FUNDING (Screenshot 5) ----------------
function renderFunding() {
  const container = document.getElementById('fundingCardsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.funding.map(item => `
    <div class="academic-card" onclick="openItemModal('funding', '${item.id}')">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="card-preview-img" loading="lazy">
        <span class="card-date-badge">${item.period}</span>
        <span class="card-pill-tag">${item.amount}</span>
        <div class="card-zoom-indicator">
          <span>🔬 View Grant Details</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${item.num}. ${item.title}</div>
        <div class="card-subtitle">${item.agency}</div>
        <div class="card-org-line">${item.scheme}</div>
        <div class="card-award-highlight">
          <span>💼</span> <span>${item.status} (${item.amount})</span>
        </div>
        <div class="card-footer-action">
          <span class="view-details-btn">Grant Details &rarr;</span>
          <button class="replace-photo-link" onclick="triggerReplaceImage(event, '${item.id}', '${item.title}')">
            📷 Replace
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------------- RENDER AWARDS (Yuva, Techgium, Taylor's, SIH, IIT) ----------------
function renderAwards() {
  const container = document.getElementById('awardsCardsGrid');
  if (!container) return;

  container.innerHTML = portfolioData.awards.map((item, idx) => `
    <div class="academic-card" onclick="openItemModal('award', '${idx}')">
      <div class="card-img-wrapper">
        <img src="${item.photo}" alt="${item.title}" class="card-preview-img" loading="lazy">
        <span class="card-date-badge">${item.year}</span>
        <span class="card-pill-tag">${item.category}</span>
        <div class="card-zoom-indicator">
          <span>🎖️ View Award &amp; Citation</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-subtitle">${item.organization}</div>
        <div class="card-award-highlight">
          <span>🎖️</span> <span>${item.prize}</span>
        </div>
        <div class="card-footer-action">
          <span class="view-details-btn">Certificate &amp; Memento &rarr;</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------------- PUBLICATIONS & PATENTS ----------------
function renderPublicationsAndPatents() {
  const pubContainer = document.getElementById('publicationsList');
  if (pubContainer) {
    pubContainer.innerHTML = portfolioData.publications.map(p => `
      <div class="pub-item">
        <div class="pub-title">${p.title}</div>
        <div class="pub-meta">
          <span>✍️ ${p.authors}</span>
          <span class="pub-tag">${p.journal}</span>
          <span>📅 ${p.year}</span>
          <span>🔗 DOI: ${p.doi}</span>
        </div>
      </div>
    `).join('');
  }

  const patContainer = document.getElementById('patentsList');
  if (patContainer) {
    patContainer.innerHTML = portfolioData.patents.map(pat => `
      <div class="pub-item" style="border-left-color: #b45309;">
        <div class="pub-title">${pat.title}</div>
        <div class="pub-meta">
          <span class="pub-tag" style="background: #fef3c7; color: #92400e;">${pat.number}</span>
          <span>📌 ${pat.status}</span>
          <span>📅 ${pat.year}</span>
          <span>👥 Inventors: ${pat.inventors}</span>
        </div>
      </div>
    `).join('');
  }
}

// ---------------- EXPERIENCE & ACADEMICS ----------------
function renderExperienceAndAcademics() {
  const expContainer = document.getElementById('experienceTrack');
  if (expContainer) {
    expContainer.innerHTML = portfolioData.experience.map(e => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-role">${e.role}</div>
          <div class="timeline-inst">${e.department} — ${e.institution}</div>
          <div class="timeline-duration">⏱️ ${e.duration}</div>
          <ul class="timeline-bullets">
            ${e.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  const acadContainer = document.getElementById('academicsTrack');
  if (acadContainer) {
    acadContainer.innerHTML = portfolioData.academics.map(a => `
      <div class="timeline-item">
        <div class="timeline-dot" style="background: #0f766e;"></div>
        <div class="timeline-content">
          <div class="timeline-role">${a.degree}</div>
          <div class="timeline-inst">${a.institution}</div>
          <div class="timeline-duration">🎓 ${a.year}</div>
          <p style="font-size: 0.84rem; color: #475569;">Specialization: <strong>${a.specialization}</strong></p>
        </div>
      </div>
    `).join('');
  }
}

// ---------------- COURSES ----------------
function renderCourses() {
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  container.innerHTML = portfolioData.courses.map(c => `
    <div class="course-box">
      <div class="course-code">${c.code} • ${c.level}</div>
      <div class="course-name">${c.name}</div>
    </div>
  `).join('');
}

// ---------------- GALLERY & FILTER ----------------
let currentGalleryFilter = 'all';

function renderGallery() {
  const container = document.getElementById('galleryCardsGrid');
  if (!container) return;

  const items = [];

  // SIH Photos & Certificate
  items.push({
    category: 'sih',
    title: 'Smart India Hackathon 2025 Mentor Certificate',
    desc: 'Ministry of Education & AICTE Award for Exceptional Contribution as Mentor',
    img: 'assets/certificates/sih-certificate.jpg',
    tag: 'SIH Certificate 📜'
  });
  items.push({
    category: 'sih',
    title: 'SIH 2025 Grand Finale — Dr. R. Senthilkumar',
    desc: 'Official Mentor at Smart India Hackathon 2025 Grand Finale',
    img: 'assets/team_photos/sih-team-backdrop.jpg',
    tag: 'SIH Mentor 🌟'
  });
  items.push({
    category: 'sih',
    title: 'Team TECH_WIZARDS (HIT Coimbatore)',
    desc: 'PS ID: SIH25138 Software Edition Grand Finale at Workstation',
    img: 'assets/team_photos/sih-tech-wizards-team.jpg',
    tag: 'SIH Team 💻'
  });
  items.push({
    category: 'sih',
    title: 'SIH 2025 Technical Evaluation & Review',
    desc: 'Dr. R. Senthilkumar with Evaluators and Student Innovators during review',
    img: 'assets/team_photos/sih-jury-evaluation.jpg',
    tag: 'SIH Evaluation 🔍'
  });

  // Techgium Real Photos & Certificate (8th Edition)
  items.push({
    category: 'techgium',
    title: 'Techgium 8th Edition Mentor Certificate',
    desc: 'L&T Technology Services Certificate of Appreciation signed by CEO Amit Chadha',
    img: 'assets/certificates/techgium-certificate.jpg',
    tag: 'Techgium Certificate 📜'
  });
  items.push({
    category: 'techgium',
    title: 'Techgium 8th Edition Team & Booth (PID # 1509)',
    desc: 'Dr. R. Senthilkumar & Student Team — Hindusthan Institute of Technology, Coimbatore',
    img: 'assets/team_photos/techgium-team-booth.jpg',
    tag: 'Techgium Team 👥'
  });
  items.push({
    category: 'techgium',
    title: 'Award Felicitation by LTTS Leadership',
    desc: 'Dr. R. Senthilkumar receiving Techgium 8th Edition Award & Memento',
    img: 'assets/team_photos/techgium-award-felicitation.jpg',
    tag: 'Award Felicitation 🎖️'
  });
  items.push({
    category: 'techgium',
    title: 'Automated Razor Blade Inspection System Demo',
    desc: 'Student team demonstrating IoT blade inspection prototype to media & jury',
    img: 'assets/team_photos/techgium-prototype-demo.jpg',
    tag: 'Prototype Demo ⚡'
  });

  // IIT Conclave
  const iit = portfolioData.hackathons.find(h => h.id === 'hack-iit');
  if (iit) {
    items.push({
      category: 'iit',
      title: 'IIT Campus Team Delegation',
      desc: 'National Innovation Conclave with students & faculty advisor',
      img: iit.image,
      tag: 'IIT Conclave 🏛️'
    });
    items.push({
      category: 'iit',
      title: 'IIT Faculty Advisor Certificate',
      desc: 'Certificate of Merit & Innovation Mentorship',
      img: iit.certImage,
      tag: 'IIT Cert 📜'
    });
  }

  // YUVA Awards Real Photos & Certificate
  items.push({
    category: 'yuva',
    title: 'Excellence in Faculty Leadership — YUVA Club 2024',
    desc: 'Official Certificate of Appreciation from Young Indians (Yi) & CII',
    img: 'assets/certificates/yuva-faculty-leadership-cert.jpg',
    tag: 'Yuva Certificate 📜'
  });
  items.push({
    category: 'yuva',
    title: 'Dr. R. Senthilkumar & Student Team on Stage',
    desc: 'Hindusthan Institute of Technology student coordinators & faculty holding YUVA honors',
    img: 'assets/team_photos/yuva-student-team.jpg',
    tag: 'Yuva Team 👥'
  });
  items.push({
    category: 'yuva',
    title: 'Dignitary Stage Felicitation at GRG Institutions',
    desc: 'Conferred by Yi Coimbatore, YUVA and CII leadership',
    img: 'assets/team_photos/yuva-stage-felicitation.jpg',
    tag: 'Felicitation 🎖️'
  });
  items.push({
    category: 'yuva',
    title: 'Young Indians (Yi) — The Voice of Young Indians Globally',
    desc: 'Dr. R. Senthilkumar at Yi leadership convention banner',
    img: 'assets/team_photos/yuva-yi-banner.jpg',
    tag: 'Yi Convention 🌟'
  });

  // Taylor's University Real Photos & Certificate
  items.push({
    category: 'taylors',
    title: 'Taylor\'s University Best Paper Certificate of Excellence',
    desc: 'Jointly conferred by Taylor\'s University (Malaysia) & Hindusthan Educational Institutions',
    img: 'assets/certificates/taylors-university-best-paper-cert.jpg',
    tag: 'Best Paper Cert 📜'
  });
  items.push({
    category: 'taylors',
    title: 'Dr. R. Senthilkumar with Taylor\'s University Conference Chair',
    desc: 'Holding the Best Paper Plaque (TESS 2023) at Taylor\'s University, Malaysia',
    img: 'assets/team_photos/taylors-best-paper-plaque.jpg',
    tag: 'Award Plaque 🏆'
  });
  items.push({
    category: 'taylors',
    title: 'Stage Felicitation at Taylor\'s University',
    desc: 'Receiving the Best Paper Award plaque on stage from the international conference committee',
    img: 'assets/team_photos/taylors-stage-award.jpg',
    tag: 'Stage Award 🎖️'
  });
  items.push({
    category: 'taylors',
    title: 'AI Lung Cancer Detection Research Presentation',
    desc: 'Oral research presentation in the lecture theater at Taylor\'s University, Kuala Lumpur',
    img: 'assets/team_photos/taylors-oral-presentation.jpg',
    tag: 'Oral Presentation 🎤'
  });

  // NPTEL
  portfolioData.nptelStars.forEach(n => {
    items.push({
      category: 'nptel',
      title: n.title,
      desc: n.subtitle + ' (' + n.issuer + ')',
      img: n.image,
      tag: 'NPTEL 🌟'
    });
  });

  // Funding
  portfolioData.funding.forEach(f => {
    items.push({
      category: 'funding',
      title: f.title,
      desc: f.agency + ' (' + f.amount + ')',
      img: f.image,
      tag: 'Grant 💼'
    });
  });

  // Filter
  const filtered = currentGalleryFilter === 'all'
    ? items
    : items.filter(it => it.category === currentGalleryFilter);

  container.innerHTML = filtered.map((it, idx) => `
    <div class="academic-card" onclick="openDirectImageModal('${it.title}', '${it.desc}', '${it.img}', '${it.tag}')">
      <div class="card-img-wrapper">
        <img src="${it.img}" alt="${it.title}" class="card-preview-img" loading="lazy">
        <span class="card-pill-tag">${it.tag}</span>
        <div class="card-zoom-indicator">
          <span>🔍 View High-Res</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${it.title}</div>
        <div class="card-subtitle">${it.desc}</div>
      </div>
    </div>
  `).join('');
}

window.filterGallery = function(cat, btn) {
  currentGalleryFilter = cat;
  document.querySelectorAll('.filter-tabs-row .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderGallery();
};

// ---------------- NAVIGATION & ACTIVE TRACKER ----------------
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], .content-card-frame[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      let targetId = current;
      if (current === 'patents') targetId = 'publications';
      if (current === 'courses') targetId = 'experience';

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${targetId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // Mobile Menu Toggle
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navPills = document.getElementById('navPillsList');
  if (toggleBtn && navPills) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navPills.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navPills.classList.remove('mobile-open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navPills.contains(e.target) && e.target !== toggleBtn) {
        navPills.classList.remove('mobile-open');
      }
    });
  }
}

// ---------------- SCROLL TO TOP ----------------
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------------- MODAL / LIGHTBOX ----------------
let currentModalItem = null;

function initModal() {
  const overlay = document.getElementById('itemModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (overlay && closeBtn) {
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function closeModal() {
  const overlay = document.getElementById('itemModalOverlay');
  if (overlay) overlay.classList.remove('open');
}

window.openDirectImageModal = function(title, desc, imgUrl, tag) {
  openModalWithContent({
    title,
    headline: title,
    subtitle: tag,
    desc,
    image: imgUrl,
    hasCert: false
  });
};

window.openItemModal = function(type, id) {
  let data = null;

  if (type === 'nptel') {
    const item = portfolioData.nptelStars.find(n => n.id === id);
    if (item) {
      data = {
        id: item.id,
        title: item.title,
        headline: item.title,
        subtitle: `${item.issuer} • ${item.date}`,
        desc: item.description,
        image: item.image,
        highlight: item.highlight,
        hasCert: true
      };
    }
  } else if (type === 'hackathon') {
    const item = portfolioData.hackathons.find(h => h.id === id);
    if (item) {
      data = {
        id: item.id,
        title: item.title,
        headline: item.project,
        subtitle: `${item.team} | ${item.award}`,
        desc: item.description,
        image: item.image,
        certImage: item.certImage,
        hasCert: Boolean(item.certImage),
        highlight: item.award
      };
    }
  } else if (type === 'resource') {
    const item = portfolioData.resourcePerson.find(r => r.id === id);
    if (item) {
      data = {
        id: item.id,
        title: item.title,
        headline: item.role,
        subtitle: `${item.organization} (${item.date})`,
        desc: item.description,
        image: item.image,
        hasCert: false
      };
    }
  } else if (type === 'funding') {
    const item = portfolioData.funding.find(f => f.id === id);
    if (item) {
      data = {
        id: item.id,
        title: `${item.num}. ${item.title}`,
        headline: `${item.agency} Sponsored Research`,
        subtitle: `${item.scheme} | Amount: ${item.amount} (${item.period})`,
        desc: item.description,
        image: item.image,
        hasCert: false,
        highlight: item.status
      };
    }
  } else if (type === 'award') {
    const item = portfolioData.awards[parseInt(id, 10)];
    if (item) {
      data = {
        title: item.title,
        headline: item.organization,
        subtitle: `${item.prize} • Year: ${item.year}`,
        desc: `Prestigious recognition in ${item.category} conferred upon Dr. R. Senthilkumar & student innovators.`,
        image: item.photo,
        certImage: item.cert,
        hasCert: Boolean(item.cert),
        highlight: item.prize
      };
    }
  }

  if (data) {
    openModalWithContent(data);
  }
};

function openModalWithContent(data) {
  currentModalItem = data;
  const overlay = document.getElementById('itemModalOverlay');
  const titleElem = document.getElementById('modalTitleDisplay');
  const imgElem = document.getElementById('modalImageDisplay');
  const headlineElem = document.getElementById('modalHeadlineDisplay');
  const subElem = document.getElementById('modalSubtitleDisplay');
  const descElem = document.getElementById('modalDescDisplay');
  const actionsZone = document.getElementById('modalActionsZone');

  if (titleElem) titleElem.textContent = data.title;
  if (imgElem) {
    imgElem.src = data.image;
    imgElem.alt = data.title;
  }
  if (headlineElem) headlineElem.textContent = data.headline;
  if (subElem) subElem.textContent = data.subtitle;
  if (descElem) descElem.textContent = data.desc;

  if (actionsZone) {
    let certToggleHtml = '';
    if (data.certImage) {
      certToggleHtml = `
        <button class="btn-modal-action" onclick="toggleModalCertView()">
          📜 Toggle Team Photo / Certificate
        </button>
      `;
    }

    const imgExt = (data.image && data.image.split('.').pop().split('?')[0]) || 'jpg';
    actionsZone.innerHTML = `
      ${certToggleHtml}
      <a href="${data.image}" download="${(data.title || 'document').replace(/[^\w\s-]/g, '').replace(/\s+/g, '_')}.${imgExt}" class="btn-modal-action" target="_blank">
        ⬇️ Download High-Res
      </a>
      <button class="btn-modal-action btn-modal-secondary" onclick="triggerReplaceImage(event, '${data.id || 'custom'}', '${data.title || ''}')">
        📷 Upload My Real Photo
      </button>
      <button class="btn-modal-action btn-modal-secondary" onclick="closeModal()">
        ✖ Close
      </button>
    `;
  }

  if (overlay) overlay.classList.add('open');
}

window.toggleModalCertView = function() {
  if (!currentModalItem || !currentModalItem.certImage) return;
  const imgElem = document.getElementById('modalImageDisplay');
  if (imgElem.getAttribute('data-view') === 'cert') {
    imgElem.src = currentModalItem.image;
    imgElem.setAttribute('data-view', 'photo');
  } else {
    imgElem.src = currentModalItem.certImage;
    imgElem.setAttribute('data-view', 'cert');
  }
};

// ---------------- LIVE IMAGE UPLOADER & REPLACER ----------------
let currentUploadTargetId = null;

function initUploader() {
  const fileInput = document.getElementById('globalImageFileInput');
  if (fileInput) {
    fileInput.addEventListener('change', handleFileSelected);
  }
}

window.triggerReplaceAvatar = function() {
  triggerReplaceImage(null, 'profile_photo', 'Dr. R. Senthilkumar Portrait');
};

window.triggerReplaceImage = function(event, itemId, itemTitle) {
  if (event) event.stopPropagation();
  currentUploadTargetId = itemId;

  const fileInput = document.getElementById('globalImageFileInput');
  if (fileInput) {
    fileInput.value = '';
    fileInput.click();
  }
};

function handleFileSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    if (currentUploadTargetId) {
      saveCustomImage(currentUploadTargetId, dataUrl);
      loadCustomizedImages();

      // Refresh displays
      renderProfile();
      renderNptelSection();
      renderResourcePerson();
      renderHackathons();
      renderFunding();
      renderAwards();
      renderGallery();

      // If modal is currently open with this item, update its image preview too
      const modalImg = document.getElementById('modalImageDisplay');
      if (modalImg && currentModalItem && currentModalItem.id === currentUploadTargetId) {
        modalImg.src = dataUrl;
      }

      showNotification('✅ Photo updated successfully! It is saved to your browser.');
    }
  };
  reader.readAsDataURL(file);
}

window.resetDefaultImages = function() {
  if (confirm('Reset all custom uploaded images back to default authentic graphics?')) {
    localStorage.removeItem('senthilkumar_portfolio_images');
    location.reload();
  }
};

// ---------------- PRINT CV / CONTACT MODAL ----------------
window.triggerPrintCV = function() {
  window.print();
};

window.openContactDialog = function() {
  const p = portfolioData.profile;
  alert(`Dr. R. Senthilkumar\nAssociate Professor\nHindusthan Institute of Technology\n\nEmail: ${p.email}\nPhone: ${p.contact}\nAddress: ${p.location}`);
};

// Notification Toast
function showNotification(msg) {
  let toast = document.getElementById('appNotificationToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appNotificationToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      background: #064e29;
      color: #ffffff;
      padding: 0.8rem 1.6rem;
      border-radius: 9999px;
      font-size: 0.88rem;
      font-weight: 700;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      z-index: 3000;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, 3500);
}

