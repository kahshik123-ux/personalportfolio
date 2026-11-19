// Render the academic portfolio from the supplied profile data.
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  renderProfile();
  renderMetrics();
  renderTags('specializations', portfolioData.specializations);
  renderTags('memberships', portfolioData.memberships);
  renderCardList('educationGrid', portfolioData.education.map(item => ({
    title: item.degree,
    subtitle: item.institution,
    meta: item.result,
    description: item.specialization,
    kicker: 'Education'
  })));
  renderCardList('experienceGrid', portfolioData.experience.map(item => ({
    title: item.role,
    subtitle: item.institution,
    meta: item.period,
    kicker: 'Academic appointment'
  })));
  renderCardList('projectsGrid', portfolioData.sponsoredProjects.concat(portfolioData.atalProgram).map(item => ({
    title: item.title,
    subtitle: item.agency,
    meta: `Application ID: ${item.applicationId}`,
    details: [`Role: ${item.role}`, `Amount: ${item.amount}`]
  })));
  renderCardList('nptelAchievements', portfolioData.nptelAchievements.map(item => ({
    title: item.title,
    subtitle: item.organizer,
    meta: item.period
  })));
  renderCardList('nptelCourses', portfolioData.nptelCourses.map(item => ({
    title: item.title,
    subtitle: item.organizer,
    meta: `${item.grade} · ${item.duration}`
  })));
  renderCardList('fdpCourses', portfolioData.facultyDevelopmentPrograms.map(item => ({
    title: item.title,
    subtitle: item.organizer,
    meta: item.duration
  })));
  renderCardList('journalList', portfolioData.journals.map(item => ({
    title: item.title,
    subtitle: item.journal,
    meta: [item.year, item.impact].filter(Boolean).join(' · ')
  })));
  renderCardList('bookChapterList', portfolioData.bookChapters.map(item => ({
    title: item.title,
    subtitle: item.publisher,
    meta: `ISBN: ${item.isbn}`
  })));
  renderCardList('bookList', portfolioData.books.map(item => ({
    title: item.title,
    subtitle: item.publisher,
    meta: `ISBN: ${item.isbn}`
  })));
  renderCardList('ieeeConferenceList', portfolioData.ieeeConferences.map(item => ({
    title: item.title,
    subtitle: item.conference,
    meta: `${item.venue} · ${item.period}`,
    link: item.link
  })));
  renderCardList('conferencePublicationList', portfolioData.conferencePublications.map(item => ({
    title: item.title,
    subtitle: item.conference,
    meta: `${item.venue} · ${item.period}`
  })));
  renderCardList('patentList', portfolioData.patents.map(item => ({
    title: item.title,
    subtitle: `Inventor: ${item.inventor}`,
    meta: `Patent No. ${item.patentNumber} · ${item.status}`
  })));
  renderCardList('awardsList', portfolioData.awards.map(item => ({
    title: item.title,
    subtitle: item.organization,
    meta: item.year,
    description: item.description
  })));
  renderTags('subjectsList', portfolioData.subjectsHandled);
  renderCardList('activitiesList', portfolioData.outreachActivities.map((description, index) => ({
    title: `Community activity ${index + 1}`,
    description
  })));
  renderMediaGroups();
  document.getElementById('printCvBtn').addEventListener('click', window.triggerPrintCV);
  initNavigation();
  initMediaDialog();
  initScrollTop();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function renderProfile() {
  const profile = portfolioData.profile;
  document.getElementById('facultyNameDisplay').textContent = profile.name;
  document.getElementById('facultyDegreesDisplay').textContent = profile.degrees;
  document.getElementById('facultyDesigDisplay').textContent =
    `${profile.title} — ${profile.department}`;
  document.getElementById('facultyInstDisplay').textContent = profile.institution;
  document.getElementById('facultyAvatarImg').src = profile.photo;
  document.getElementById('careerObjective').textContent = profile.careerObjective;
  document.getElementById('totalExperience').textContent = portfolioData.totalExperience;
  document.getElementById('scholarLink').href = profile.links.scholar;
  document.getElementById('orcidLink').href = profile.links.orcid;

  const details = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Contact', value: profile.contact, href: `tel:${profile.contact.replace(/\s+/g, '')}` },
    { label: 'ORCID iD', value: profile.orcidId, href: profile.links.orcid },
    { label: 'Scopus ID', value: profile.scopusId },
    { label: 'Web of Science Researcher ID', value: profile.webOfScienceResearcherId },
    { label: 'Google Scholar ID', value: profile.googleScholarId, href: profile.links.scholar }
  ];

  document.getElementById('personalDetailsGrid').innerHTML = details.map(item => `
    <div class="info-chip">
      <div class="chip-content">
        <span class="chip-label">${escapeHtml(item.label)}:</span>
        ${item.href
          ? `<a class="chip-val-link" href="${escapeHtml(item.href)}"${/^https?:/.test(item.href) ? ' target="_blank" rel="noopener"' : ''}>${escapeHtml(item.value)}</a>`
          : `<span>${escapeHtml(item.value)}</span>`}
      </div>
    </div>
  `).join('');
}

function renderMetrics() {
  const container = document.getElementById('researchMetrics');
  container.innerHTML = portfolioData.researchMetrics.map(metric => `
    <article class="metric-card">
      <div class="metric-value">${escapeHtml(metric.value)}</div>
      <div class="metric-label">${escapeHtml(metric.label)}</div>
    </article>
  `).join('');
}

function renderTags(containerId, values) {
  const container = document.getElementById(containerId);
  container.innerHTML = values.map(value => `
    <span class="resume-tag">${escapeHtml(value)}</span>
  `).join('');
}

function renderCardList(containerId, entries) {
  const container = document.getElementById(containerId);
  container.innerHTML = entries.map(entry => `
    <article class="resume-card">
      ${entry.kicker ? `<span class="resume-card-kicker">${escapeHtml(entry.kicker)}</span>` : ''}
      <h3 class="resume-card-title">${escapeHtml(entry.title)}</h3>
      ${entry.subtitle ? `<p class="resume-card-subtitle">${escapeHtml(entry.subtitle)}</p>` : ''}
      ${entry.meta ? `<p class="resume-card-meta">${escapeHtml(entry.meta)}</p>` : ''}
      ${entry.description ? `<p class="resume-card-description">${escapeHtml(entry.description)}</p>` : ''}
      ${entry.details ? `<ul class="resume-card-details">${entry.details.map(detail => `<li>${escapeHtml(detail)}</li>`).join('')}</ul>` : ''}
      ${entry.link ? `<a class="resume-card-link" href="${escapeHtml(entry.link)}" target="_blank" rel="noopener">View conference proceedings ↗</a>` : ''}
    </article>
  `).join('');
}

function renderMediaGroups() {
  const navigation = document.getElementById('mediaCategoryNav');
  const container = document.getElementById('mediaGroups');
  navigation.innerHTML = portfolioData.mediaCategories.map(category => `
    <a class="media-category-link" href="#media-${category.id}">${escapeHtml(category.title)}</a>
  `).join('');

  container.innerHTML = portfolioData.mediaCategories.map(category => {
    const certificates = portfolioData.certificates
      .map((entry, index) => ({ entry, index }))
      .filter(item => item.entry.category === category.id);
    const photos = portfolioData.photos
      .map((entry, index) => ({ entry, index }))
      .filter(item => item.entry.category === category.id);
    const projects = category.id === 'aicte'
      ? portfolioData.sponsoredProjects.concat(portfolioData.atalProgram)
      : [];

    return `
      <section class="media-category" id="media-${category.id}" aria-labelledby="media-${category.id}-heading">
        <div class="media-category-heading">
          <span class="section-badge-tag">${category.id === 'aicte' ? 'SPONSORED RESEARCH' : 'CERTIFICATES & PHOTOS'}</span>
          <h3 id="media-${category.id}-heading">${escapeHtml(category.title)}</h3>
        </div>
        ${projects.length ? `
          <div class="media-subgroup">
            <h4 class="media-subgroup-title">Funded projects &amp; programs</h4>
            <div class="resume-grid">${projects.map(renderProjectCard).join('')}</div>
          </div>
        ` : ''}
        ${certificates.length ? `
          <div class="media-subgroup">
            <h4 class="media-subgroup-title">Certificates &amp; recognitions</h4>
            <div class="media-grid">${renderMediaCards(certificates, 'certificates')}</div>
          </div>
        ` : ''}
        ${photos.length ? `
          <div class="media-subgroup">
            <h4 class="media-subgroup-title">Photos &amp; event moments</h4>
            <div class="media-grid">${renderMediaCards(photos, 'photos')}</div>
          </div>
        ` : ''}
      </section>
    `;
  }).join('');
}

function renderProjectCard(project) {
  return `
    <article class="resume-card">
      <span class="resume-card-kicker">${escapeHtml(project.agency)}</span>
      <h4 class="resume-card-title">${escapeHtml(project.title)}</h4>
      <p class="resume-card-meta">Application ID: ${escapeHtml(project.applicationId)}</p>
      <ul class="resume-card-details">
        <li>Role: ${escapeHtml(project.role)}</li>
        <li>Funding: ${escapeHtml(project.amount)}</li>
      </ul>
    </article>
  `;
}

function renderMediaCards(entries, mediaType) {
  return entries.map(({ entry, index }) => `
    <button class="media-card" type="button" data-media-type="${mediaType}" data-media-index="${index}">
      <span class="media-card-image-frame">
        <img src="${escapeHtml(entry.image)}" alt="" class="media-card-image" loading="lazy" decoding="async">
      </span>
      <span class="media-card-copy">
        <span class="media-card-title">${escapeHtml(entry.title)}</span>
        <span class="media-card-description">${escapeHtml(entry.description)}</span>
        <span class="media-card-action">View full size ↗</span>
      </span>
    </button>
  `).join('');
}

function initMediaDialog() {
  const dialog = document.getElementById('mediaDialog');
  const image = document.getElementById('mediaDialogImage');
  const title = document.getElementById('mediaDialogTitle');
  const description = document.getElementById('mediaDialogDescription');

  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-media-type]');
    if (!trigger) return;

    const entry = portfolioData[trigger.dataset.mediaType][Number(trigger.dataset.mediaIndex)];
    image.src = entry.image;
    image.alt = entry.title;
    title.textContent = entry.title;
    description.textContent = entry.description;
    dialog.showModal();
  });

  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    image.alt = '';
  });
}

function initNavigation() {
  const toggle = document.getElementById('mobileMenuToggle');
  const navigation = document.getElementById('navPillsList');
  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('mobile-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollTop() {
  const button = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    button.classList.toggle('visible', window.scrollY > 500);
  });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

window.triggerPrintCV = function() {
  window.print();
};
