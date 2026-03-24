/* ============================================================
   script.js — Caleb Galagar Portfolio
   Sections: Certificate Data · Pagination · Certificate Modal ·
             Project Data · Project Carousel · Project Modal ·
             Scroll Reveal · Active Nav
   ============================================================ */

/* ----- CERTIFICATE DATA ----- */
const certs = [
  {
    issuer: 'Udemy',
    name: 'Figma Essential for User Interface and User Experience UI UX',
    year: '2026',
    desc: 'Covered the fundamentals of UI/UX design using Figma — from wireframing and prototyping to building polished, developer-ready components and design systems.',
    tags: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z"/>
      <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"/>
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"/>
      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z"/>
      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"/>
    </svg>`,
  },
  {
    issuer: 'Koenig Solutions',
    name: 'Next Generation Firewall Threat Defense Features — CISCO',
    year: '2025',
    desc: 'Explored advanced threat defense configurations using CISCO Next Generation Firewalls, including intrusion prevention, application visibility, and network security policies.',
    tags: ['Cybersecurity', 'CISCO', 'Networking', 'Firewall'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`,
  },
  {
    issuer: 'Koenig Solutions',
    name: 'Strengthening Information Security & Compliance in a Cyber-Risk Era',
    year: '2025',
    desc: 'Focused on information security frameworks, compliance strategies, and risk management techniques to help organisations navigate a complex cyber threat landscape.',
    tags: ['InfoSec', 'Compliance', 'Risk Management', 'Cybersecurity'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>`,
  },
  {
    issuer: 'Koenig Solutions',
    name: 'GitHub for Copilot — Developers',
    year: '2025',
    desc: 'Learned how to integrate GitHub Copilot into development workflows — using AI-assisted coding to write, review, and improve code more efficiently across projects.',
    tags: ['GitHub', 'AI Tools', 'Copilot', 'Developer Productivity'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>`,
  },
  {
    issuer: 'Koenig Solutions',
    name: 'Terraform Essentials — Simplifying Infrastructure on Azure',
    year: '2025',
    desc: 'Introduced infrastructure-as-code concepts using Terraform on Microsoft Azure — covering resource provisioning, state management, and automating cloud deployments.',
    tags: ['Terraform', 'Azure', 'Cloud', 'IaC'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>`,
  },
  {
    issuer: 'Udemy',
    name: 'HTML5 CSS3 and JavaScript for Beginners: From Zero to Hero',
    year: '2025',
    desc: 'A comprehensive beginner course covering core web technologies — HTML5 structure, CSS3 styling, and JavaScript fundamentals to build interactive web pages from scratch.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Web Development'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>`,
  },
  {
    issuer: 'Koenig Solutions',
    name: 'PMP® Scrum Master Certified (SMC®) — Master Agile & Lead with Confidence',
    year: '2025',
    desc: 'Covered Agile methodologies, Scrum frameworks, sprint planning, and project leadership techniques to improve team efficiency and delivery quality.',
    tags: ['Scrum', 'SMC', 'PMP', 'Agile'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v4l3 3"/>
    </svg>`,
  },
  {
    issuer: 'Udemy',
    name: 'Java Complete Course Using Visual Studio Code',
    year: '2025',
    desc: 'Introduces core Java concepts such as variables, control structures, object-oriented programming, and building applications within the Visual Studio Code environment.',
    tags: ['Java', 'Visual Studio Code', 'Programming'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
    </svg>`,
  },
  {
    issuer: 'Udemy',
    name: 'Web Development Bootcamp with HTML CSS PHP MySQL WordPress',
    year: '2025',
    desc: 'A comprehensive course covering full-stack web development using HTML, CSS, PHP, MySQL, and WordPress.',
    tags: ['Web Development', 'HTML', 'CSS', 'PHP', 'MySQL', 'WordPress'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`,
  },
  {
    issuer: 'Udemy',
    name: 'UI/UX Design Masterclass with Adobe XD: From Beginner to Pro',
    year: '2026',
    desc: 'Focuses on user interface and user experience design using Adobe XD, covering wireframing, prototyping, user research, and creating visually appealing, user-centered designs.',
    tags: ['UI/UX', 'Adobe XD', 'Design'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>`,
  },
  {
    issuer: 'Udemy',
    name: 'Python Web Development Bootcamp: From Beginner to Full-Stack Developer',
    year: '2026',
    desc: 'Introduces full-stack development using Python, including working with frameworks, handling databases, building APIs, and integrating front-end and back-end components.',
    tags: ['Python', 'Web Development', 'Full-Stack'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
    </svg>`,
  },
  {
    issuer: 'Udemy',
    name: 'Python for Complete Beginners',
    year: '2026',
    desc: 'Covers the fundamentals of Python programming, including basic syntax, data types, control structures, and simple problem-solving techniques.',
    tags: ['Python', 'Programming'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>`,
  },
  {
    issuer: 'Udemy',
    name: 'Web Development for Beginners: HTML, CSS & JavaScript',
    year: '2026',
    desc: 'Introduces core web development concepts such as HTML for page structure, CSS for design and layout, and JavaScript for basic interactivity and dynamic behavior.',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    </svg>`,
  },
  {
    issuer: 'Commission on Audit',
    name: 'Certificate of Completion',
    year: '2025',
    desc: 'Developed the front-end of a Digital Signing Service for non-COA entities, creating a responsive and user-friendly interface using ASP.NET Web Forms, C#, CSS, and JavaScript. Translated Figma designs into functional workflows, enabling efficient document uploading, reviewing, approval, and digital signing.',
    tags: ['Visual Studio', 'CSS', 'Figma', 'Frontend Development'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>`,
  },
];

/* ----- CERTIFICATE PAGINATION ----- */
const PER_PAGE   = 6;
let currentPage  = 0;
const totalPages = Math.ceil(certs.length / PER_PAGE);

function renderCerts(page) {
  const grid = document.getElementById('certGrid');
  grid.classList.add('fade-out');

  setTimeout(() => {
    grid.innerHTML = '';
    const start = page * PER_PAGE;
    const slice = certs.slice(start, start + PER_PAGE);

    slice.forEach((c, i) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.onclick = () => openCertModal(start + i);
      card.innerHTML = `
        <span class="cert-year">${c.year}</span>
        <div class="cert-icon">${c.icon}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-footer">via ${c.issuer}</div>
        <div class="cert-view-hint">view details →</div>
      `;
      grid.appendChild(card);
    });

    document.getElementById('certPrev').disabled = page === 0;
    document.getElementById('certNext').disabled = page === totalPages - 1;
    document.getElementById('certLabel').textContent = `${page + 1} of ${totalPages}`;

    const dotsEl = document.getElementById('certDots');
    dotsEl.innerHTML = '';
    for (let p = 0; p < totalPages; p++) {
      const dot = document.createElement('span');
      dot.className = 'cert-dot' + (p === page ? ' active' : '');
      dot.onclick = () => goToPage(p);
      dotsEl.appendChild(dot);
    }

    grid.classList.remove('fade-out');
    grid.classList.add('fade-in');
    setTimeout(() => grid.classList.remove('fade-in'), 300);
  }, 200);
}

function changePage(dir) {
  const next = currentPage + dir;
  if (next < 0 || next >= totalPages) return;
  currentPage = next;
  renderCerts(currentPage);
}

function goToPage(p) {
  currentPage = p;
  renderCerts(currentPage);
}

/* ----- CERTIFICATE MODAL ----- */
function openCertModal(i) {
  const c = certs[i];
  document.getElementById('certModalIcon').innerHTML     = c.icon;
  document.getElementById('certModalIssuer').textContent = `${c.issuer} · ${c.year}`;
  document.getElementById('certModalName').textContent   = c.name;
  document.getElementById('certModalDesc').textContent   = c.desc;
  document.getElementById('certModalMeta').innerHTML     = c.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleCertOverlayClick(e) {
  if (e.target === document.getElementById('certModal')) closeCertModal();
}

/* ============================================================
   PROJECT DATA
   ── How to add photos ──────────────────────────────────────
   1. Put your image files next to index.html, e.g. in /images/
   2. Fill in the "photos" array with the relative paths:
        photos: ['images/dss-1.png', 'images/dss-2.png']
   3. Leave a slot as '' if you don't have that photo yet —
      a placeholder tile will appear automatically.
   ── Description formatting ─────────────────────────────────
   Separate paragraphs with a blank line (\n\n).
   ============================================================ */
const projects = [
  {
    title: 'Digital Signing Service for Non-COA',
    year: '2025',
    desc: `A digital document signing system built for government use, streamlining approval workflows for non-COA documents with a clean, accessible interface.\n\nDeveloped the front-end using ASP.NET Web Forms, C#, CSS, and JavaScript. Translated Figma designs into functional workflows that support document uploading, reviewing, approval, and digital signing.`,
    tags: ['C#', 'Visual Studio', 'CSS', 'Figma'],
    thumb: '1.png',
    photos: ['About.png', 'LogIn Page 2.png', 'Registration Page.png'],
  },
  {
    title: 'REMADE',
    year: '2024–2025',
    desc: `An e-commerce platform focused on sustainable, second-hand goods — featuring an AI chatbot to help users find what they're looking for more naturally.\n\nBuilt with React and styled with custom CSS. The chatbot integration was designed to reduce friction and make browsing feel more conversational and human.`,
    tags: ['React', 'CSS', 'Figma'],
    thumb: 'remade.png',
    photos: ['renade1.png', 'remade2.png', 'remade3.png'],
  },
  {
    title: 'HabitatFinder',
    year: '2024',
    desc: `A property browsing web app designed in Figma and built with HTML/CSS — helping users find and explore housing listings with a calm, intuitive layout.\n\nFocused on responsive design and accessibility, ensuring the interface works smoothly across different screen sizes and devices.`,
    tags: ['Figma', 'CSS', 'Front-End Development'],
    thumb: 'habitatfinder.png',
    photos: ['About 2.png', 'HomePage.png', 'LandingPage.png'],
  },
  {
    title: 'Milktea POS Management System',
    year: '2023',
    desc: `Contributed to the design and front-end development of Milktea POS Management System, a POS management system for small businesses, using HTML, CSS, and JavaScript. Developed a responsive and intuitive interface that streamlined inventory tracking and transaction processing, improving efficiency and reducing manual errors.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Front-End Development'],
    thumb: '2.pngs',
    photos: ['SwifTea.png', 'milktea.png', 'Swiftea2.jpg'],
  },
];

/* ----- PROJECT MODAL ----- */
function openProjModal(index) {
  const p = projects[index];

  // Header
  document.getElementById('projModalTitle').textContent = p.title;
  document.getElementById('projModalYear').textContent  = p.year;

  // Description — split on blank lines into paragraphs
  document.getElementById('projModalDesc').innerHTML = p.desc
    .split('\n\n')
    .map(para => `<p>${para.trim()}</p>`)
    .join('');

  // Tags
  document.getElementById('projModalTags').innerHTML = p.tags
    .map(t => `<span class="modal-tag">${t}</span>`)
    .join('');

  // Gallery
  const gallery = document.getElementById('projModalGallery');
  gallery.innerHTML = '';

  const hasPhotos = p.photos && p.photos.some(src => src.trim() !== '');

  if (hasPhotos) {
    // Real images
    p.photos.forEach(src => {
      if (!src.trim()) return;
      const img = document.createElement('img');
      img.src       = src;
      img.alt       = p.title;
      img.className = 'proj-modal-photo';
      img.loading   = 'lazy';
      gallery.appendChild(img);
    });
  } else {
    // Placeholder tiles until real photos are added
    p.photos.forEach((_, i) => {
      const slot = document.createElement('div');
      slot.className = 'proj-modal-placeholder';
      slot.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span>photo ${i + 1}</span>
      `;
      gallery.appendChild(slot);
    });
  }

  document.getElementById('projModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjModal() {
  document.getElementById('projModal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleProjOverlayClick(e) {
  if (e.target === document.getElementById('projModal')) closeProjModal();
}

/* ----- PROJECT CAROUSEL ----- */
const projSlides  = document.querySelectorAll('.proj-slide');
const projTotal   = projSlides.length;
let   projCurrent = 0;

function buildProjDots() {
  const dotsEl = document.getElementById('projDots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < projTotal; i++) {
    const dot = document.createElement('span');
    dot.className = 'proj-dot' + (i === projCurrent ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsEl.appendChild(dot);
  }
}

function goToSlide(index) {
  projCurrent = index;
  document.getElementById('projTrack').style.transform = `translateX(-${projCurrent * 100}%)`;
  document.querySelectorAll('.proj-dot').forEach((d, i) => {
    d.classList.toggle('active', i === projCurrent);
  });
  document.getElementById('projPrev').disabled = projCurrent === 0;
  document.getElementById('projNext').disabled = projCurrent === projTotal - 1;
}

function projCarousel(dir) {
  const next = projCurrent + dir;
  if (next < 0 || next >= projTotal) return;
  goToSlide(next);
}

// Touch swipe
(function initSwipe() {
  const track = document.getElementById('projTrack');
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) projCarousel(diff > 0 ? 1 : -1);
  }, { passive: true });
})();

/* ----- KEYBOARD CLOSE ----- */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeCertModal(); closeProjModal(); }
});

/* ----- INIT ----- */
document.body.classList.add('js-ready');
renderCerts(0);
buildProjDots();
goToSlide(0);

/* ----- SCROLL REVEAL ----- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    observer.unobserve(e.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ----- ACTIVE NAV ----- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
let ticking = false;

const setActive = () => {
  let current = '';
  sections.forEach(s => { if (scrollY >= s.offsetTop - 130) current = s.id; });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
  ticking = false;
};

window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(setActive); ticking = true; }
});

setActive();
