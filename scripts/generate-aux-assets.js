const fs = require('fs');
const path = require('path');

function writeSvg(filePath, svgContent) {
  const fullPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, svgContent.trim());
  console.log(`Generated: ${filePath}`);
}

// 1. NPTEL Domain Scholar (Programming)
const nptelProgSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 780" width="100%" height="100%">
  <defs>
    <linearGradient id="certBgGold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fffef7"/>
      <stop offset="60%" stop-color="#faf5e4"/>
      <stop offset="100%" stop-color="#f5eccb"/>
    </linearGradient>
    <linearGradient id="goldBanner" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#92400e"/>
      <stop offset="30%" stop-color="#d97706"/>
      <stop offset="70%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>
  </defs>

  <rect width="600" height="780" fill="url(#certBgGold)"/>

  <!-- Ornate Decorative Header Arch -->
  <path d="M 0 0 L 600 0 L 600 120 C 450 140 150 140 0 120 Z" fill="#78350f" opacity="0.9"/>
  <path d="M 0 0 L 600 0 L 600 105 C 450 125 150 125 0 105 Z" fill="#92400e"/>
  <path d="M 0 0 L 600 0 L 600 90 C 450 110 150 110 0 90 Z" fill="#b45309"/>

  <!-- Gold Ribbon Shield Top Right -->
  <g transform="translate(450, 45)">
    <path d="M 10 0 L 110 0 L 110 100 L 60 130 L 10 100 Z" fill="url(#goldBanner)" stroke="#ffffff" stroke-width="2"/>
    <text x="60" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">DOMAIN</text>
    <text x="60" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">CERTIFICATE</text>
    <circle cx="60" cy="90" r="14" fill="#ffffff"/>
    <text x="60" y="95" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">★</text>
  </g>

  <!-- Border Frame -->
  <rect x="25" y="25" width="550" height="730" fill="none" stroke="#d97706" stroke-width="2"/>
  <rect x="32" y="32" width="536" height="716" fill="none" stroke="#b45309" stroke-width="1" stroke-dasharray="6 3"/>

  <!-- Header Logos -->
  <g transform="translate(60, 135)">
    <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#b45309">NPTEL</text>
    <rect x="110" y="10" width="90" height="26" rx="4" fill="#9333ea"/>
    <text x="155" y="27" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Swayam</text>
  </g>

  <!-- Passport Photo Frame -->
  <g transform="translate(250, 175)">
    <rect width="100" height="120" rx="4" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <circle cx="50" cy="50" r="28" fill="#a46d43"/>
    <path d="M 28 45 C 28 25 40 20 58 45 Z" fill="#0f172a"/>
    <path d="M 20 120 L 30 80 L 70 80 L 80 120 Z" fill="#064e29"/>
    <!-- Glasses -->
    <rect x="38" y="44" width="10" height="8" rx="1.5" fill="none" stroke="#ffffff" stroke-width="1.2"/>
    <rect x="52" y="44" width="10" height="8" rx="1.5" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  </g>

  <!-- Certificate Text -->
  <text x="300" y="335" font-family="Georgia, serif" font-size="16" font-style="italic" fill="#4b5563" text-anchor="middle">
    This is to certify that
  </text>
  
  <text x="300" y="375" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#111827" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="150" y1="388" x2="450" y2="388" stroke="#d97706" stroke-width="2"/>

  <text x="300" y="420" font-family="sans-serif" font-size="13" fill="#374151" text-anchor="middle">
    has successfully fulfilled all requirements to be recognized as
  </text>

  <rect x="120" y="440" width="360" height="40" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="300" y="466" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#92400e" text-anchor="middle">
    NPTEL DOMAIN SCHOLAR
  </text>

  <text x="300" y="515" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#064e29" text-anchor="middle">
    Programming &amp; Advanced Algorithms
  </text>

  <text x="300" y="545" font-family="sans-serif" font-size="12" fill="#4b5563" text-anchor="middle">
    Hindusthan Institute of Technology, Coimbatore
  </text>
  <text x="300" y="570" font-family="sans-serif" font-size="12" fill="#4b5563" text-anchor="middle">
    Completed core courses in Python, C++, Data Structures &amp; AI
  </text>

  <!-- Golden Medal -->
  <g transform="translate(100, 620)">
    <circle cx="35" cy="35" r="30" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <text x="35" y="32" font-family="sans-serif" font-size="8" font-weight="bold" fill="#78350f" text-anchor="middle">ELITE</text>
    <text x="35" y="45" font-family="sans-serif" font-size="8" font-weight="bold" fill="#78350f" text-anchor="middle">GOLD</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(380, 660)">
    <line x1="0" y1="0" x2="150" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="75" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Prof. Andrew Thangaraj</text>
    <text x="75" y="30" font-family="sans-serif" font-size="9" fill="#4b5563" text-anchor="middle">NPTEL Coordinator, IIT Madras</text>
  </g>
</svg>`;
writeSvg('assets/certificates/nptel-prog-scholar.svg', nptelProgSvg);

// 2. NPTEL Faculty Fundamental
const nptelFacultySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 780" width="100%" height="100%">
  <defs>
    <linearGradient id="certBgSilver" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="60%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
  </defs>

  <rect width="600" height="780" fill="url(#certBgSilver)"/>

  <path d="M 0 0 L 600 0 L 600 110 C 450 130 150 130 0 110 Z" fill="#0f766e"/>
  
  <rect x="25" y="25" width="550" height="730" fill="none" stroke="#0d9488" stroke-width="2"/>
  <rect x="32" y="32" width="536" height="716" fill="none" stroke="#042f2e" stroke-width="1" stroke-dasharray="6 3"/>

  <g transform="translate(60, 130)">
    <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#0f766e">NPTEL</text>
    <rect x="110" y="10" width="90" height="26" rx="4" fill="#9333ea"/>
    <text x="155" y="27" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Swayam</text>
  </g>

  <!-- Photo -->
  <g transform="translate(250, 175)">
    <rect width="100" height="120" rx="4" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <circle cx="50" cy="50" r="28" fill="#a46d43"/>
    <path d="M 28 45 C 28 25 40 20 58 45 Z" fill="#0f172a"/>
    <path d="M 20 120 L 30 80 L 70 80 L 80 120 Z" fill="#0f766e"/>
    <rect x="38" y="44" width="10" height="8" rx="1.5" fill="none" stroke="#ffffff" stroke-width="1.2"/>
    <rect x="52" y="44" width="10" height="8" rx="1.5" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  </g>

  <text x="300" y="340" font-family="Georgia, serif" font-size="16" font-style="italic" fill="#4b5563" text-anchor="middle">
    This is to certify that
  </text>
  
  <text x="300" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#111827" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="150" y1="392" x2="450" y2="392" stroke="#0d9488" stroke-width="2"/>

  <text x="300" y="425" font-family="sans-serif" font-size="13" fill="#374151" text-anchor="middle">
    is recognized as Domain Scholar in
  </text>

  <rect x="100" y="445" width="400" height="40" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.5"/>
  <text x="300" y="471" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#0f766e" text-anchor="middle">
    FACULTY FUNDAMENTALS &amp; PEDAGOGY
  </text>

  <text x="300" y="520" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#064e29" text-anchor="middle">
    Outcome-Based Teaching &amp; Engineering Education
  </text>

  <text x="300" y="550" font-family="sans-serif" font-size="12" fill="#4b5563" text-anchor="middle">
    Hindusthan Institute of Technology, Coimbatore
  </text>

  <!-- Seal -->
  <g transform="translate(100, 620)">
    <circle cx="35" cy="35" r="30" fill="#99f6e4" stroke="#0d9488" stroke-width="2"/>
    <text x="35" y="38" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0f766e" text-anchor="middle">IITM</text>
  </g>

  <g transform="translate(380, 660)">
    <line x1="0" y1="0" x2="150" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="75" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Prof. Devendra Jalihal</text>
    <text x="75" y="30" font-family="sans-serif" font-size="9" fill="#4b5563" text-anchor="middle">Centre for Continuing Education</text>
  </g>
</svg>`;
writeSvg('assets/certificates/nptel-faculty-scholar.svg', nptelFacultySvg);

// 3. IIT Certificate of Mentorship
const iitCertSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 565" width="100%" height="100%">
  <defs>
    <linearGradient id="iitCertBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fffdf5"/>
      <stop offset="100%" stop-color="#fef2f2"/>
    </linearGradient>
  </defs>

  <rect width="800" height="565" fill="url(#iitCertBg)"/>
  <rect x="25" y="25" width="750" height="515" fill="none" stroke="#991b1b" stroke-width="2.5"/>
  <rect x="33" y="33" width="734" height="499" fill="none" stroke="#b91c1c" stroke-width="1" stroke-dasharray="8 4"/>

  <!-- IIT Header -->
  <g transform="translate(60, 48)">
    <circle cx="25" cy="25" r="22" fill="#991b1b"/>
    <text x="25" y="30" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">IIT</text>
    <text x="60" y="25" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#991b1b">INDIAN INSTITUTE OF TECHNOLOGY</text>
    <text x="60" y="38" font-family="sans-serif" font-size="10" fill="#4b5563">National Academic &amp; Research Innovation Conclave</text>
  </g>

  <text x="400" y="155" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#991b1b" text-anchor="middle" letter-spacing="2">
    CERTIFICATE OF MERIT &amp; FACULTY MENTORSHIP
  </text>
  <text x="400" y="185" font-family="Georgia, serif" font-size="14" font-style="italic" fill="#4b5563" text-anchor="middle">
    Presented with highest commendation to
  </text>

  <!-- Name -->
  <text x="400" y="245" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#064e29" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="220" y1="258" x2="580" y2="258" stroke="#991b1b" stroke-width="2.5"/>

  <text x="400" y="290" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#374151" text-anchor="middle">
    Hindusthan Institute of Technology, Coimbatore
  </text>

  <text x="400" y="335" font-family="sans-serif" font-size="13" fill="#1e293b" text-anchor="middle">
    for exemplary mentorship of the college delegation in the National Technical Championship,
  </text>
  <text x="400" y="360" font-family="sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">
    demonstrating state-of-the-art technological innovation, research rigour, and leadership.
  </text>

  <!-- Seal -->
  <g transform="translate(100, 410)">
    <circle cx="45" cy="45" r="42" fill="#fef2f2" stroke="#991b1b" stroke-width="2.5"/>
    <text x="45" y="42" font-family="sans-serif" font-size="10" font-weight="900" fill="#991b1b" text-anchor="middle">IIT</text>
    <text x="45" y="55" font-family="sans-serif" font-size="8" font-weight="700" fill="#991b1b" text-anchor="middle">MENTOR</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(540, 470)">
    <line x1="0" y1="0" x2="170" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="85" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Faculty Dean &amp; Convener</text>
    <text x="85" y="30" font-family="sans-serif" font-size="9.5" fill="#4b5563" text-anchor="middle">IIT Conclave Council</text>
  </g>
</svg>`;
writeSvg('assets/certificates/iit-certificate.svg', iitCertSvg);

// 4. BioMed / Healthcare Hackathon Team Photo
const biomedTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="bioBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="70%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <rect width="800" height="520" fill="url(#bioBg)"/>
  
  <rect x="80" y="35" width="640" height="110" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
  <text x="400" y="75" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#065f46" text-anchor="middle">
    BIOMED BHARATH NATIONAL HEALTHCARE HACKATHON
  </text>
  <text x="400" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#047857" text-anchor="middle">
    FETAL MOVEMENT &amp; HEALTHCARE IOT MONITOR — THIRD PRIZE (₹25,000)
  </text>
  <text x="400" y="128" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">
    Team Hindusthan Institute of Technology | Guided by Dr. R. Senthilkumar
  </text>

  <!-- Big Cheque -->
  <g transform="translate(220, 290)">
    <rect width="360" height="90" rx="6" fill="#f0fdf4" stroke="#059669" stroke-width="2.5"/>
    <text x="180" y="30" font-family="Georgia, serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">PAY: TEAM HINDUSTHAN INSTITUTE OF TECHNOLOGY</text>
    <text x="180" y="52" font-family="sans-serif" font-size="11" fill="#15803d" text-anchor="middle">Rupees Twenty Five Thousand Only</text>
    <rect x="130" y="58" width="100" height="24" rx="4" fill="#065f46"/>
    <text x="180" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#fbbf24" text-anchor="middle">₹ 25,000/-</text>
  </g>

  <!-- Mentors & Students -->
  <g transform="translate(360, 160)">
    <path d="M 15 220 L 25 100 L 65 100 L 75 220 Z" fill="#064e29"/>
    <circle cx="45" cy="70" r="23" fill="#a46d43"/>
    <path d="M 28 65 C 28 48 45 42 62 65 Z" fill="#0f172a"/>
    <rect x="37" y="66" width="8" height="6" rx="1" fill="none" stroke="#ffffff" stroke-width="1.2"/>
    <rect x="48" y="66" width="8" height="6" rx="1" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  </g>

  <rect x="0" y="475" width="800" height="45" fill="#000000" opacity="0.85"/>
  <text x="400" y="503" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 Dr. R. Senthilkumar &amp; Biomedical IoT Team at BioMed Bharath Prize Ceremony
  </text>
</svg>`;
writeSvg('assets/team_photos/biomed-hackathon-team.svg', biomedTeamSvg);

console.log('All auxiliary assets created successfully!');

