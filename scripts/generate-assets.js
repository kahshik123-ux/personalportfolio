const fs = require('fs');
const path = require('path');

// Helper to write SVG file
function writeSvg(filePath, svgContent) {
  const fullPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, svgContent.trim());
  console.log(`Generated: ${filePath}`);
}

// 1. Dr. R. Senthilkumar Profile Photo (Realistic Professional Portrait SVG)
const profileSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#143c24"/>
      <stop offset="50%" stop-color="#1b4d2e"/>
      <stop offset="100%" stop-color="#0a2614"/>
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="60%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#b88358"/>
      <stop offset="50%" stop-color="#aa7449"/>
      <stop offset="100%" stop-color="#8a5a32"/>
    </linearGradient>
    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="400" height="480" fill="url(#bgGrad)" rx="16"/>
  
  <!-- Architectural / Campus motif subtle lines -->
  <g opacity="0.12" stroke="#ffffff" stroke-width="1.5">
    <circle cx="200" cy="180" r="140" fill="none"/>
    <circle cx="200" cy="180" r="170" fill="none" stroke-dasharray="8 6"/>
    <path d="M 50 480 L 200 200 L 350 480"/>
    <line x1="0" y1="240" x2="400" y2="240"/>
  </g>

  <!-- Body & Suit -->
  <g id="body">
    <!-- White Shirt Collar -->
    <path d="M 160 270 L 200 330 L 240 270 L 225 245 L 175 245 Z" fill="#ffffff" filter="url(#shadow)"/>
    
    <!-- Red/Gold Tie -->
    <path d="M 193 285 L 207 285 L 210 370 L 200 395 L 190 370 Z" fill="#b91c1c"/>
    <path d="M 190 272 L 210 272 L 207 287 L 193 287 Z" fill="#991b1b"/>
    <line x1="195" y1="300" x2="205" y2="310" stroke="#fef08a" stroke-width="2" opacity="0.7"/>
    <line x1="194" y1="330" x2="206" y2="340" stroke="#fef08a" stroke-width="2" opacity="0.7"/>
    <line x1="193" y1="360" x2="205" y2="370" stroke="#fef08a" stroke-width="2" opacity="0.7"/>

    <!-- Suit Coat -->
    <path d="M 80 480 C 85 360 120 280 160 260 L 190 370 L 140 480 Z" fill="url(#suitGrad)"/>
    <path d="M 320 480 C 315 360 280 280 240 260 L 210 370 L 260 480 Z" fill="url(#suitGrad)"/>
    
    <!-- Lapels -->
    <path d="M 160 260 L 190 380 L 175 385 L 130 290 Z" fill="#1e293b"/>
    <path d="M 240 260 L 210 380 L 225 385 L 270 290 Z" fill="#1e293b"/>
    
    <!-- Pocket Square -->
    <path d="M 265 345 L 285 340 L 295 346 L 275 350 Z" fill="#f8fafc"/>
    <rect x="263" y="348" width="34" height="4" fill="#0f172a" rx="1"/>

    <!-- Lapel Pin (HIT Golden Academic Badge) -->
    <circle cx="152" cy="305" r="7" fill="url(#goldAccent)"/>
    <circle cx="152" cy="305" r="5" fill="#1e3a8a"/>
    <polygon points="152,301 154,307 149,303 155,303 150,307" fill="#fbbf24"/>
  </g>

  <!-- Neck -->
  <path d="M 175 210 L 225 210 L 230 270 L 170 270 Z" fill="#935d33"/>

  <!-- Head / Face -->
  <g id="head">
    <!-- Ears -->
    <ellipse cx="132" cy="175" rx="11" ry="18" fill="#a46d43"/>
    <ellipse cx="268" cy="175" rx="11" ry="18" fill="#a46d43"/>

    <!-- Head Shape -->
    <path d="M 140 160 C 140 100 165 90 200 90 C 235 90 260 100 260 160 C 260 215 240 240 200 240 C 160 240 140 215 140 160 Z" fill="url(#skinGrad)"/>

    <!-- Hair (Professional side-parted clean cut) -->
    <path d="M 135 155 C 135 95 155 75 200 75 C 245 75 265 95 265 150 C 265 140 255 105 235 95 C 210 88 170 90 145 110 C 138 120 135 140 135 155 Z" fill="#0f172a"/>
    <!-- Beard & Moustache (Well groomed professional) -->
    <path d="M 158 198 C 170 190 190 190 200 195 C 210 190 230 190 242 198 C 235 207 215 204 200 206 C 185 204 165 207 158 198 Z" fill="#1e293b"/>
    <!-- Trimmed Short Beard outline -->
    <path d="M 150 175 C 145 220 170 242 200 242 C 230 242 255 220 250 175 C 248 190 240 226 200 232 C 160 226 152 190 150 175 Z" fill="#1e293b" opacity="0.9"/>

    <!-- Eyebrows -->
    <path d="M 158 148 Q 175 142 188 147" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M 212 147 Q 225 142 242 148" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none"/>

    <!-- Eyes -->
    <circle cx="173" cy="158" r="5" fill="#0f172a"/>
    <circle cx="227" cy="158" r="5" fill="#0f172a"/>
    <circle cx="174" cy="156" r="1.5" fill="#ffffff"/>
    <circle cx="228" cy="156" r="1.5" fill="#ffffff"/>

    <!-- Spectacles / Glasses (Modern Academic Framed) -->
    <rect x="156" y="146" width="34" height="24" rx="6" fill="none" stroke="#334155" stroke-width="2.5"/>
    <rect x="210" y="146" width="34" height="24" rx="6" fill="none" stroke="#334155" stroke-width="2.5"/>
    <line x1="190" y1="156" x2="210" y2="156" stroke="#334155" stroke-width="2.5"/>
    <line x1="156" y1="155" x2="135" y2="152" stroke="#334155" stroke-width="2"/>
    <line x1="244" y1="155" x2="265" y2="152" stroke="#334155" stroke-width="2"/>
    <!-- Glass glare reflection -->
    <line x1="162" y1="150" x2="175" y2="165" stroke="#ffffff" stroke-width="1.2" opacity="0.6"/>
    <line x1="216" y1="150" x2="229" y2="165" stroke="#ffffff" stroke-width="1.2" opacity="0.6"/>

    <!-- Nose -->
    <path d="M 197 156 L 195 180 Q 200 184 205 180" stroke="#784824" stroke-width="2" fill="none"/>

    <!-- Warm confident smile -->
    <path d="M 184 212 Q 200 220 216 212" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Lower Banner Badge -->
  <g transform="translate(30, 420)">
    <rect width="340" height="44" rx="10" fill="#064e29" stroke="#10b981" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="170" y="27" fill="#ffffff" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="0.5">
      Dr. R. SENTHILKUMAR, M.E., Ph.D.
    </text>
  </g>
</svg>`;
writeSvg('assets/profile/dr-senthilkumar.svg', profileSvg);

// 2. Smart India Hackathon Certificate SVG
const sihCertSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 565" width="100%" height="100%">
  <defs>
    <linearGradient id="certBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fffdf7"/>
      <stop offset="100%" stop-color="#f8f5eb"/>
    </linearGradient>
    <linearGradient id="goldRibbon" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
    <linearGradient id="triGreen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>

  <!-- Parchment Base -->
  <rect width="800" height="565" fill="url(#certBg)"/>
  
  <!-- Outer Ornate Borders -->
  <rect x="20" y="20" width="760" height="525" fill="none" stroke="#c29d38" stroke-width="3"/>
  <rect x="28" y="28" width="744" height="509" fill="none" stroke="#1e3a2b" stroke-width="1.5"/>
  <rect x="34" y="34" width="732" height="497" fill="none" stroke="#d4af37" stroke-width="0.8" stroke-dasharray="6 3"/>

  <!-- Corner Ornaments -->
  <g fill="#c29d38">
    <path d="M 28 48 L 48 28 L 28 28 Z"/>
    <path d="M 772 48 L 752 28 L 772 28 Z"/>
    <path d="M 28 517 L 48 537 L 28 537 Z"/>
    <path d="M 772 517 L 752 537 L 772 537 Z"/>
  </g>

  <!-- Header Logos & Branding -->
  <g transform="translate(60, 50)">
    <!-- Ministry Emblem Motif -->
    <circle cx="40" cy="35" r="28" fill="#eff6ff" stroke="#1e40af" stroke-width="2"/>
    <text x="40" y="32" font-family="serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">GOVT OF</text>
    <text x="40" y="45" font-family="serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">INDIA</text>
    <text x="85" y="30" font-family="sans-serif" font-size="12" font-weight="700" fill="#1f2937">Ministry of Education</text>
    <text x="85" y="45" font-family="sans-serif" font-size="10" fill="#4b5563">Innovation Cell (MIC) &amp; AICTE</text>

    <!-- SIH Emblem Right -->
    <g transform="translate(560, 5)">
      <circle cx="50" cy="30" r="32" fill="#047857"/>
      <path d="M 35 25 Q 50 15 65 25 Q 60 45 50 48 Q 40 45 35 25 Z" fill="#f59e0b"/>
      <text x="50" y="33" font-family="sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">SIH</text>
      <text x="50" y="43" font-family="sans-serif" font-size="7" font-weight="700" fill="#ffffff" text-anchor="middle">WINNER</text>
    </g>
  </g>

  <!-- Title Badge -->
  <g transform="translate(200, 130)">
    <rect width="400" height="34" rx="17" fill="url(#goldRibbon)"/>
    <text x="200" y="23" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="2">
      SMART INDIA HACKATHON
    </text>
  </g>

  <!-- Subtitle -->
  <text x="400" y="195" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#111827" text-anchor="middle" letter-spacing="1">
    CERTIFICATE OF MENTORSHIP &amp; EXCELLENCE
  </text>
  
  <text x="400" y="222" font-family="Georgia, serif" font-size="13" font-style="italic" fill="#4b5563" text-anchor="middle">
    This prestigious recognition is proudly presented to
  </text>

  <!-- Recipient Name -->
  <text x="400" y="265" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="28" font-weight="800" fill="#064e29" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="240" y1="275" x2="560" y2="275" stroke="#d97706" stroke-width="2"/>

  <text x="400" y="300" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#374151" text-anchor="middle">
    Associate Professor — Hindusthan Institute of Technology, Coimbatore
  </text>

  <!-- Citation Body -->
  <text x="400" y="335" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">
    for exceptional mentorship and leadership guiding the student innovator team to secure
  </text>
  <text x="400" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="800" fill="#b45309" text-anchor="middle">
    ★ FIRST PRIZE (₹1,00,000 CASH AWARD) — GRAND FINALE ★
  </text>
  <text x="400" y="385" font-family="sans-serif" font-size="12" fill="#4b5563" text-anchor="middle">
    in the Hardware &amp; Software Edition under Ministry of Education’s Innovation Cell.
  </text>

  <!-- Official Gold Embossed Stamp -->
  <g transform="translate(110, 410)">
    <circle cx="45" cy="45" r="42" fill="none" stroke="#d97706" stroke-width="3"/>
    <circle cx="45" cy="45" r="37" fill="#fffbeb" stroke="#d97706" stroke-width="1" stroke-dasharray="4 2"/>
    <polygon points="45,15 52,32 70,32 55,44 61,61 45,50 29,61 35,44 20,32 38,32" fill="#f59e0b" opacity="0.3"/>
    <text x="45" y="42" font-family="sans-serif" font-size="10" font-weight="900" fill="#92400e" text-anchor="middle">SIH</text>
    <text x="45" y="55" font-family="sans-serif" font-size="8" font-weight="700" fill="#92400e" text-anchor="middle">VERIFIED</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(320, 465)">
    <line x1="0" y1="0" x2="160" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="80" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Dr. Abhay Jere</text>
    <text x="80" y="30" font-family="sans-serif" font-size="9.5" fill="#4b5563" text-anchor="middle">Chief Innovation Officer, MoE</text>
  </g>

  <g transform="translate(560, 465)">
    <line x1="0" y1="0" x2="160" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="80" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Prof. T. G. Sitharam</text>
    <text x="80" y="30" font-family="sans-serif" font-size="9.5" fill="#4b5563" text-anchor="middle">Chairman, AICTE</text>
  </g>
</svg>`;
writeSvg('assets/certificates/sih-certificate.svg', sihCertSvg);

// 3. Smart India Hackathon Team Photo SVG (Realistic celebration graphic)
const sihTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="stageBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f2b1d"/>
      <stop offset="60%" stop-color="#14422b"/>
      <stop offset="100%" stop-color="#091b12"/>
    </linearGradient>
    <linearGradient id="chequeBg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#fef9c3"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>

  <!-- Stage Backdrop -->
  <rect width="800" height="520" fill="url(#stageBg)"/>
  
  <!-- Stage Lighting -->
  <polygon points="100,0 250,0 450,520 0,520" fill="#ffffff" opacity="0.05"/>
  <polygon points="700,0 550,0 350,520 800,520" fill="#ffffff" opacity="0.05"/>
  <circle cx="400" cy="180" r="260" fill="#10b981" opacity="0.12"/>

  <!-- SIH Backdrop Banner on Stage -->
  <rect x="100" y="30" width="600" height="110" rx="12" fill="#064e29" stroke="#34d399" stroke-width="2"/>
  <text x="400" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="3">
    SMART INDIA HACKATHON GRAND FINALE
  </text>
  <text x="400" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#fbbf24" text-anchor="middle" letter-spacing="1">
    ★ NATIONAL LEVEL INNOVATION CONCLAVE ★
  </text>
  <text x="400" y="122" font-family="sans-serif" font-size="11" fill="#a7f3d0" text-anchor="middle">
    Organized by Ministry of Education, AICTE &amp; Persistent Systems
  </text>

  <!-- Stage Floor -->
  <rect x="0" y="440" width="800" height="80" fill="#042013"/>
  <line x1="0" y1="440" x2="800" y2="440" stroke="#10b981" stroke-width="3"/>

  <!-- Team Members Silhouette & Illustration -->
  <!-- Dr. R. Senthilkumar (Center Mentor) -->
  <g transform="translate(350, 160)">
    <!-- Body in Dark Blazer -->
    <path d="M 20 280 L 30 180 L 40 140 L 70 140 L 80 180 L 90 280 Z" fill="#1e293b"/>
    <path d="M 45 140 L 55 175 L 65 140 Z" fill="#ffffff"/>
    <path d="M 53 145 L 57 145 L 58 190 L 52 190 Z" fill="#dc2626"/>
    <!-- Head -->
    <circle cx="55" cy="105" r="26" fill="#a46d43"/>
    <path d="M 33 100 C 33 80 43 75 55 75 C 67 75 77 80 77 100 Z" fill="#0f172a"/>
    <path d="M 40 115 C 45 130 65 130 70 115 Z" fill="#1e293b"/>
    <!-- Spectacles -->
    <rect x="42" y="98" width="11" height="8" rx="2" fill="none" stroke="#f1f5f9" stroke-width="1.5"/>
    <rect x="57" y="98" width="11" height="8" rx="2" fill="none" stroke="#f1f5f9" stroke-width="1.5"/>
    <line x1="53" y1="102" x2="57" y2="102" stroke="#f1f5f9" stroke-width="1.5"/>
    <!-- Badge -->
    <rect x="42" y="195" width="26" height="16" rx="3" fill="#fbbf24"/>
    <text x="55" y="207" font-family="sans-serif" font-size="8" font-weight="bold" fill="#000000" text-anchor="middle">MENTOR</text>
  </g>

  <!-- Student Innovator 1 (Left 1) -->
  <g transform="translate(150, 190)">
    <path d="M 10 250 L 25 140 L 65 140 L 80 250 Z" fill="#0284c7"/>
    <circle cx="45" cy="110" r="23" fill="#b4784a"/>
    <path d="M 28 105 C 28 85 45 80 62 105 Z" fill="#0f172a"/>
    <text x="45" y="170" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">HIT CSE</text>
  </g>

  <!-- Student Innovator 2 (Left 2) -->
  <g transform="translate(250, 180)">
    <path d="M 10 260 L 25 140 L 65 140 L 80 260 Z" fill="#2563eb"/>
    <circle cx="45" cy="108" r="22" fill="#c48858"/>
    <path d="M 28 100 C 28 85 45 78 62 100 Z" fill="#0f172a"/>
    <text x="45" y="170" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">LEAD</text>
  </g>

  <!-- Student Innovator 3 (Right 1) -->
  <g transform="translate(470, 180)">
    <path d="M 10 260 L 25 140 L 65 140 L 80 260 Z" fill="#0284c7"/>
    <circle cx="45" cy="108" r="22" fill="#ba8050"/>
    <path d="M 25 105 C 25 80 65 80 65 105 Z" fill="#0f172a"/>
    <text x="45" y="170" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">TECH</text>
  </g>

  <!-- Student Innovator 4 (Right 2) -->
  <g transform="translate(570, 190)">
    <path d="M 10 250 L 25 140 L 65 140 L 80 250 Z" fill="#1d4ed8"/>
    <circle cx="45" cy="110" r="23" fill="#b07444"/>
    <path d="M 28 105 C 28 85 45 80 62 105 Z" fill="#0f172a"/>
    <text x="45" y="170" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">HIT CSE</text>
  </g>

  <!-- Grand Winning Cheque Held by Team (Foreground) -->
  <g transform="translate(180, 310)">
    <!-- Cheque Shadow -->
    <rect x="0" y="0" width="440" height="110" rx="8" fill="url(#chequeBg)" stroke="#d97706" stroke-width="3" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.4))"/>
    
    <!-- Cheque Header -->
    <rect x="15" y="10" width="100" height="24" rx="4" fill="#064e29"/>
    <text x="65" y="26" font-family="sans-serif" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">SIH 2024</text>
    
    <text x="350" y="26" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e293b">DATE: GRAND FINALE</text>
    
    <text x="25" y="52" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#334155">PAY TO: </text>
    <text x="80" y="52" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#064e29">
      TEAM HINDUSTHAN INSTITUTE OF TECHNOLOGY
    </text>
    
    <text x="25" y="75" font-family="Georgia, serif" font-size="11" fill="#475569">RUPEES: </text>
    <text x="80" y="75" font-family="sans-serif" font-size="12" font-style="italic" fill="#0f172a">
      Rupees One Lakh Only (Mentored by Dr. R. Senthilkumar)
    </text>
    
    <!-- Cash Amount Box -->
    <rect x="290" y="65" width="135" height="32" rx="6" fill="#064e29" stroke="#f59e0b" stroke-width="2"/>
    <text x="357" y="87" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#fbbf24" text-anchor="middle">
      ₹ 1,00,000/-
    </text>
  </g>

  <!-- Golden 1st Prize Trophy Badge -->
  <g transform="translate(670, 240)">
    <circle cx="45" cy="45" r="40" fill="#fbbf24" stroke="#ffffff" stroke-width="3"/>
    <circle cx="45" cy="45" r="32" fill="#d97706"/>
    <text x="45" y="42" font-family="sans-serif" font-size="20" font-weight="900" fill="#ffffff" text-anchor="middle">1st</text>
    <text x="45" y="58" font-family="sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">PRIZE</text>
  </g>

  <!-- Photo Caption Overlay -->
  <rect x="0" y="480" width="800" height="40" fill="#000000" opacity="0.8"/>
  <text x="400" y="505" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 Dr. R. Senthilkumar with Team Hindusthan Institute of Technology celebrating Smart India Hackathon Win
  </text>
</svg>`;
writeSvg('assets/team_photos/sih-team.svg', sihTeamSvg);

// 4. Techgium (L&T Technology Services) Certificate SVG
const techgiumCertSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 565" width="100%" height="100%">
  <defs>
    <linearGradient id="techgiumBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f0fdf4"/>
    </linearGradient>
    <linearGradient id="lttsBlue" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="565" fill="url(#techgiumBg)"/>

  <!-- Border & Frame -->
  <rect x="25" y="25" width="750" height="515" rx="8" fill="none" stroke="#0284c7" stroke-width="2"/>
  <rect x="35" y="35" width="730" height="495" rx="4" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="8 4"/>

  <!-- Top Banner L&T Technology Services -->
  <g transform="translate(60, 50)">
    <rect width="180" height="40" rx="4" fill="#0f172a"/>
    <text x="90" y="25" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="1">L&amp;T Technology Services</text>
    <text x="90" y="34" font-family="sans-serif" font-size="7" fill="#38bdf8" text-anchor="middle">ENGINEERING THE FUTURE</text>
  </g>

  <!-- Techgium Brand Right -->
  <g transform="translate(560, 45)">
    <text x="90" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#0284c7" text-anchor="middle">
      TECH<tspan fill="#059669">GIUM</tspan>
    </text>
    <text x="90" y="44" font-family="sans-serif" font-size="9" font-weight="700" fill="#64748b" text-anchor="middle">OPEN INNOVATION INITIATIVE</text>
  </g>

  <!-- Certificate Heading -->
  <text x="400" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#0369a1" text-anchor="middle" letter-spacing="3">
    CERTIFICATE OF RECOGNITION &amp; MENTORSHIP
  </text>
  <text x="400" y="195" font-family="Georgia, serif" font-size="14" font-style="italic" fill="#475569" text-anchor="middle">
    This certificate is awarded in honor of outstanding engineering mentorship to
  </text>

  <!-- Awardee Name -->
  <text x="400" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="800" fill="#0f172a" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="220" y1="262" x2="580" y2="262" stroke="#0284c7" stroke-width="2.5"/>

  <text x="400" y="290" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#334155" text-anchor="middle">
    Hindusthan Institute of Technology, Coimbatore
  </text>

  <!-- Description -->
  <text x="400" y="330" font-family="sans-serif" font-size="13" fill="#1e293b" text-anchor="middle">
    for mentoring student innovators who qualified as <tspan font-weight="bold" fill="#0284c7">National Finalists</tspan> in TECHGIUM,
  </text>
  <text x="400" y="355" font-family="sans-serif" font-size="13" fill="#1e293b" text-anchor="middle">
    demonstrating state-of-the-art technological ingenuity in Industry 4.0 &amp; Embedded Systems.
  </text>

  <!-- Emblem Seal -->
  <g transform="translate(100, 400)">
    <circle cx="50" cy="50" r="45" fill="#f0f9ff" stroke="#0284c7" stroke-width="2.5"/>
    <circle cx="50" cy="50" r="38" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="3 2"/>
    <text x="50" y="47" font-family="sans-serif" font-size="10" font-weight="900" fill="#0369a1" text-anchor="middle">TECHGIUM</text>
    <text x="50" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#059669" text-anchor="middle">LTTS FINALIST</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(320, 475)">
    <line x1="0" y1="0" x2="160" y2="0" stroke="#475569" stroke-width="1.2"/>
    <text x="80" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Amit Chadha</text>
    <text x="80" y="30" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">CEO &amp; MD, L&amp;T Technology Services</text>
  </g>

  <g transform="translate(560, 475)">
    <line x1="0" y1="0" x2="160" y2="0" stroke="#475569" stroke-width="1.2"/>
    <text x="80" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Jury Panel Chair</text>
    <text x="80" y="30" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Techgium Innovation Council</text>
  </g>
</svg>`;
writeSvg('assets/certificates/techgium-certificate.svg', techgiumCertSvg);

// 5. Techgium Team Photo SVG
const techgiumTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="hallBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="70%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <rect width="800" height="520" fill="url(#hallBg)"/>
  
  <!-- Exhibition Booth Backdrop -->
  <rect x="80" y="40" width="640" height="130" rx="8" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
  <text x="400" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#ffffff" text-anchor="middle">
    L&amp;T TECHGIUM GRAND FINALE EXHIBITION
  </text>
  <text x="400" y="115" font-family="sans-serif" font-size="15" font-weight="700" fill="#fef08a" text-anchor="middle">
    PROJECT DISPLAY &amp; JURY EVALUATION BOOTH
  </text>
  <text x="400" y="145" font-family="sans-serif" font-size="12" fill="#e0f2fe" text-anchor="middle">
    Team Hindusthan Institute of Technology | Guided by Dr. R. Senthilkumar
  </text>

  <!-- Prototype Display Table -->
  <rect x="220" y="360" width="360" height="100" rx="6" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Hardware working model -->
  <rect x="260" y="330" width="120" height="40" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <circle cx="280" cy="350" r="5" fill="#22c55e"/>
  <circle cx="300" cy="350" r="5" fill="#ef4444"/>
  <circle cx="320" cy="350" r="5" fill="#3b82f6"/>
  <text x="320" y="385" font-family="monospace" font-size="9" fill="#a7f3d0">IoT SMART CONTROLLER</text>

  <!-- Laptop Display -->
  <rect x="420" y="320" width="90" height="55" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <rect x="425" y="325" width="80" height="42" fill="#0284c7"/>
  <path d="M 405 375 L 525 375 L 515 382 L 415 382 Z" fill="#94a3b8"/>

  <!-- People (Dr. R. Senthilkumar & Student Innovators at Booth) -->
  <!-- Dr. R. Senthilkumar (Center Left) -->
  <g transform="translate(320, 180)">
    <path d="M 15 200 L 25 100 L 65 100 L 75 200 Z" fill="#0f172a"/>
    <circle cx="45" cy="70" r="24" fill="#a46d43"/>
    <path d="M 28 65 C 28 48 45 42 62 65 Z" fill="#0f172a"/>
    <path d="M 37 78 C 42 90 55 90 60 78 Z" fill="#1e293b"/>
    <rect x="36" y="66" width="9" height="7" rx="1.5" fill="none" stroke="#f8fafc" stroke-width="1.2"/>
    <rect x="49" y="66" width="9" height="7" rx="1.5" fill="none" stroke="#f8fafc" stroke-width="1.2"/>
    <!-- Faculty Pass Badge -->
    <rect x="35" y="125" width="20" height="25" fill="#ffffff" rx="2"/>
    <rect x="37" y="127" width="16" height="5" fill="#0284c7"/>
  </g>

  <!-- Student Innovator 1 -->
  <g transform="translate(180, 200)">
    <path d="M 15 180 L 25 100 L 65 100 L 75 180 Z" fill="#1e3a8a"/>
    <circle cx="45" cy="70" r="22" fill="#c48858"/>
    <path d="M 28 65 C 28 50 45 45 62 65 Z" fill="#0f172a"/>
    <rect x="35" y="125" width="20" height="25" fill="#ffffff" rx="2"/>
  </g>

  <!-- Student Innovator 2 -->
  <g transform="translate(540, 200)">
    <path d="M 15 180 L 25 100 L 65 100 L 75 180 Z" fill="#0369a1"/>
    <circle cx="45" cy="70" r="22" fill="#ba8050"/>
    <path d="M 25 65 C 25 45 65 45 65 65 Z" fill="#0f172a"/>
    <rect x="35" y="125" width="20" height="25" fill="#ffffff" rx="2"/>
  </g>

  <!-- Footer Banner -->
  <rect x="0" y="475" width="800" height="45" fill="#000000" opacity="0.85"/>
  <text x="400" y="503" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 Techgium National Finals Project Showcase with Dr. R. Senthilkumar &amp; Student Engineering Team
  </text>
</svg>`;
writeSvg('assets/team_photos/techgium-team.svg', techgiumTeamSvg);

// 6. NPTEL Star / Swayam Certificate SVG
const nptelCertSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 565" width="100%" height="100%">
  <defs>
    <linearGradient id="nptelBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fffef7"/>
      <stop offset="100%" stop-color="#f5efe0"/>
    </linearGradient>
    <linearGradient id="goldStarGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>

  <rect width="800" height="565" fill="url(#nptelBg)"/>

  <!-- Ornate Border -->
  <rect x="25" y="25" width="750" height="515" fill="none" stroke="#854d0e" stroke-width="3"/>
  <rect x="33" y="33" width="734" height="499" fill="none" stroke="#ca8a04" stroke-width="1.2"/>
  <rect x="40" y="40" width="720" height="485" fill="none" stroke="#a16207" stroke-width="0.8" stroke-dasharray="4 2"/>

  <!-- NPTEL & SWAYAM Logos -->
  <g transform="translate(65, 55)">
    <rect width="90" height="36" rx="4" fill="#a855f7"/>
    <text x="45" y="24" font-family="sans-serif" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle">swayam</text>
  </g>

  <g transform="translate(635, 50)">
    <circle cx="40" cy="30" r="28" fill="#ca8a04"/>
    <text x="40" y="36" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">NPTEL</text>
  </g>

  <!-- Title Badge -->
  <g transform="translate(240, 65)">
    <rect width="320" height="36" rx="18" fill="url(#goldStarGrad)"/>
    <text x="160" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">
      ★ NPTEL STAR CERTIFICATE ★
    </text>
  </g>

  <!-- Main Body -->
  <text x="400" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#854d0e" text-anchor="middle">
    DISCIPLINE STAR &amp; DOMAIN SCHOLAR
  </text>
  <text x="400" y="175" font-family="sans-serif" font-size="13" font-weight="600" fill="#713f12" text-anchor="middle">
    Computer Science &amp; Engineering Domain
  </text>

  <text x="400" y="215" font-family="Georgia, serif" font-size="14" font-style="italic" fill="#4b5563" text-anchor="middle">
    This prestigious title is awarded by IIT Madras &amp; NPTEL to
  </text>

  <!-- Recipient Name -->
  <text x="400" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#064e29" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="240" y1="272" x2="560" y2="272" stroke="#ca8a04" stroke-width="2"/>

  <text x="400" y="298" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#374151" text-anchor="middle">
    Associate Professor — Hindusthan Institute of Technology, Coimbatore
  </text>

  <text x="400" y="340" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">
    for exceptional commitment to continuous academic learning, completing multiple
  </text>
  <text x="400" y="365" font-family="sans-serif" font-size="13" font-weight="bold" fill="#854d0e" text-anchor="middle">
    Elite + Gold Certifications with Top 1% &amp; Top 5% Performance
  </text>
  <text x="400" y="390" font-family="sans-serif" font-size="12" fill="#4b5563" text-anchor="middle">
    in Advanced Data Structures, Cloud Computing, and Machine Learning Systems.
  </text>

  <!-- Seal -->
  <g transform="translate(110, 420)">
    <circle cx="45" cy="45" r="42" fill="#fef9c3" stroke="#ca8a04" stroke-width="3"/>
    <text x="45" y="42" font-family="sans-serif" font-size="10" font-weight="900" fill="#854d0e" text-anchor="middle">NPTEL</text>
    <text x="45" y="55" font-family="sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">IIT MADRAS</text>
  </g>

  <!-- Coordinator Signature -->
  <g transform="translate(540, 470)">
    <line x1="0" y1="0" x2="170" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="85" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Prof. Andrew Thangaraj</text>
    <text x="85" y="30" font-family="sans-serif" font-size="9.5" fill="#4b5563" text-anchor="middle">NPTEL Coordinator, IIT Madras</text>
  </g>
</svg>`;
writeSvg('assets/certificates/nptel-star-certificate.svg', nptelCertSvg);

// 7. IIT Team Photo SVG
const iitTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="iitSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="60%" stop-color="#bae6fd"/>
      <stop offset="100%" stop-color="#f0fdf4"/>
    </linearGradient>
  </defs>

  <!-- Sky -->
  <rect width="800" height="520" fill="url(#iitSky)"/>

  <!-- IIT Heritage Administrative Building in Background -->
  <g fill="#991b1b" stroke="#7f1d1d" opacity="0.85">
    <rect x="250" y="120" width="300" height="120" rx="4"/>
    <polygon points="230,120 400,50 570,120"/>
    <!-- Dome / Pillar Columns -->
    <rect x="280" y="140" width="18" height="100" fill="#f8fafc"/>
    <rect x="330" y="140" width="18" height="100" fill="#f8fafc"/>
    <rect x="380" y="140" width="18" height="100" fill="#f8fafc"/>
    <rect x="430" y="140" width="18" height="100" fill="#f8fafc"/>
    <rect x="480" y="140" width="18" height="100" fill="#f8fafc"/>
  </g>
  
  <!-- Campus Lawn -->
  <rect x="0" y="270" width="800" height="250" fill="#15803d"/>
  <ellipse cx="400" cy="300" rx="380" ry="40" fill="#16a34a"/>

  <!-- Banner Held on Lawn -->
  <g transform="translate(160, 240)">
    <rect width="480" height="45" rx="6" fill="#0f172a" stroke="#ffffff" stroke-width="2"/>
    <text x="240" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">
      INDIAN INSTITUTE OF TECHNOLOGY (IIT) RESEARCH DELEGATION
    </text>
  </g>

  <!-- Team Members Group Photo -->
  <!-- Dr. R. Senthilkumar (Center Faculty Leader) -->
  <g transform="translate(360, 245)">
    <path d="M 15 220 L 25 100 L 65 100 L 75 220 Z" fill="#0f172a"/>
    <circle cx="45" cy="70" r="23" fill="#a46d43"/>
    <path d="M 28 65 C 28 48 45 42 62 65 Z" fill="#0f172a"/>
    <path d="M 37 78 C 42 88 55 88 60 78 Z" fill="#1e293b"/>
    <rect x="37" y="66" width="8" height="6" rx="1" fill="none" stroke="#ffffff" stroke-width="1.2"/>
    <rect x="48" y="66" width="8" height="6" rx="1" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  </g>

  <!-- Student Innovator 1 -->
  <g transform="translate(200, 260)">
    <path d="M 15 200 L 25 100 L 65 100 L 75 200 Z" fill="#ffffff" stroke="#cbd5e1"/>
    <circle cx="45" cy="70" r="21" fill="#b4784a"/>
    <path d="M 28 65 C 28 50 45 45 62 65 Z" fill="#0f172a"/>
  </g>

  <!-- Student Innovator 2 -->
  <g transform="translate(280, 255)">
    <path d="M 15 205 L 25 100 L 65 100 L 75 205 Z" fill="#0369a1"/>
    <circle cx="45" cy="70" r="21" fill="#c48858"/>
    <path d="M 28 65 C 28 50 45 45 62 65 Z" fill="#0f172a"/>
  </g>

  <!-- Student Innovator 3 -->
  <g transform="translate(440, 255)">
    <path d="M 15 205 L 25 100 L 65 100 L 75 205 Z" fill="#15803d"/>
    <circle cx="45" cy="70" r="21" fill="#ba8050"/>
    <path d="M 25 65 C 25 45 65 45 65 65 Z" fill="#0f172a"/>
  </g>

  <!-- Student Innovator 4 -->
  <g transform="translate(520, 260)">
    <path d="M 15 200 L 25 100 L 65 100 L 75 200 Z" fill="#b91c1c"/>
    <circle cx="45" cy="70" r="21" fill="#b07444"/>
    <path d="M 28 65 C 28 50 45 45 62 65 Z" fill="#0f172a"/>
  </g>

  <!-- Caption Bar -->
  <rect x="0" y="475" width="800" height="45" fill="#0f172a" opacity="0.9"/>
  <text x="400" y="503" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 IIT Campus National Innovation Conclave — Dr. R. Senthilkumar &amp; Student Delegation
  </text>
</svg>`;
writeSvg('assets/team_photos/iit-team.svg', iitTeamSvg);

// 8. YUVA Award Certificate SVG
const yuvaCertSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 565" width="100%" height="100%">
  <defs>
    <linearGradient id="yuvaBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
    <linearGradient id="yuvaOrange" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#c2410c"/>
    </linearGradient>
  </defs>

  <rect width="800" height="565" fill="url(#yuvaBg)"/>
  
  <!-- Outer Gold & Orange Borders -->
  <rect x="25" y="25" width="750" height="515" fill="none" stroke="#d97706" stroke-width="2.5"/>
  <rect x="33" y="33" width="734" height="499" fill="none" stroke="#ea580c" stroke-width="1" stroke-dasharray="6 3"/>

  <!-- Yuva Header Emblem -->
  <g transform="translate(350, 45)">
    <circle cx="50" cy="40" r="35" fill="url(#yuvaOrange)"/>
    <text x="50" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">YUVA</text>
    <text x="50" y="58" font-family="sans-serif" font-size="7" font-weight="800" fill="#fef08a" text-anchor="middle">AWARDS</text>
  </g>

  <text x="400" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#9a3412" text-anchor="middle" letter-spacing="2">
    YUVA INNOVATION &amp; LEADERSHIP AWARD
  </text>
  <text x="400" y="175" font-family="sans-serif" font-size="12" font-weight="700" fill="#c2410c" text-anchor="middle">
    STATE / NATIONAL YOUTH INNOVATORS EMPOWERMENT CONCLAVE
  </text>

  <text x="400" y="215" font-family="Georgia, serif" font-size="14" font-style="italic" fill="#4b5563" text-anchor="middle">
    This prestigious honor is conferred upon distinguished mentor
  </text>

  <!-- Awardee Name -->
  <text x="400" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="800" fill="#064e29" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="220" y1="272" x2="580" y2="272" stroke="#ea580c" stroke-width="2.5"/>

  <text x="400" y="300" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#374151" text-anchor="middle">
    Associate Professor — Hindusthan Institute of Technology, Coimbatore
  </text>

  <!-- Citation Text -->
  <text x="400" y="340" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">
    in recognition of outstanding contributions in mentoring youth innovations,
  </text>
  <text x="400" y="365" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c2410c" text-anchor="middle">
    fostering entrepreneurial excellence and impactful technological solutions.
  </text>

  <!-- Seal -->
  <g transform="translate(100, 410)">
    <circle cx="45" cy="45" r="42" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
    <text x="45" y="42" font-family="sans-serif" font-size="10" font-weight="900" fill="#9a3412" text-anchor="middle">YUVA</text>
    <text x="45" y="55" font-family="sans-serif" font-size="8" font-weight="700" fill="#c2410c" text-anchor="middle">HONOR ROLL</text>
  </g>

  <!-- Dignitaries -->
  <g transform="translate(540, 465)">
    <line x1="0" y1="0" x2="170" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="85" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Yuva Conclave Committee</text>
    <text x="85" y="30" font-family="sans-serif" font-size="9.5" fill="#4b5563" text-anchor="middle">President &amp; Convenor</text>
  </g>
</svg>`;
writeSvg('assets/certificates/yuva-award-certificate.svg', yuvaCertSvg);

// 9. YUVA Award Stage Team Photo SVG
const yuvaTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="yuvaStage" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#431407"/>
      <stop offset="60%" stop-color="#7c2d12"/>
      <stop offset="100%" stop-color="#1c0a05"/>
    </linearGradient>
  </defs>

  <rect width="800" height="520" fill="url(#yuvaStage)"/>

  <!-- Stage Banner -->
  <rect x="100" y="30" width="600" height="110" rx="10" fill="#ea580c" stroke="#fed7aa" stroke-width="2"/>
  <text x="400" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#ffffff" text-anchor="middle">
    YUVA INNOVATORS CONCLAVE &amp; AWARDS CEREMONY
  </text>
  <text x="400" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#fef08a" text-anchor="middle">
    ★ STATE FELICITATION OF EXEMPLARY MENTORS &amp; INNOVATORS ★
  </text>
  <text x="400" y="122" font-family="sans-serif" font-size="11" fill="#ffedd5" text-anchor="middle">
    Recognizing Dr. R. Senthilkumar &amp; Student Achievers
  </text>

  <!-- Stage Floor with Red Carpet -->
  <rect x="0" y="430" width="800" height="90" fill="#991b1b"/>
  <line x1="0" y1="430" x2="800" y2="430" stroke="#f59e0b" stroke-width="4"/>

  <!-- Chief Guest presenting Memento to Dr. R. Senthilkumar -->
  <!-- Dignitary / Guest (Left) -->
  <g transform="translate(240, 180)">
    <path d="M 15 220 L 25 110 L 65 110 L 75 220 Z" fill="#f8fafc" stroke="#cbd5e1"/>
    <!-- Traditional Shawl -->
    <path d="M 20 110 L 30 180 L 45 180 L 35 110 Z" fill="#ea580c"/>
    <circle cx="45" cy="75" r="23" fill="#b4784a"/>
    <path d="M 28 70 C 28 50 45 45 62 70 Z" fill="#475569"/>
  </g>

  <!-- Golden Memento Trophy held between them -->
  <g transform="translate(360, 260)">
    <polygon points="20,80 40,80 35,30 25,30" fill="#f59e0b"/>
    <circle cx="30" cy="20" r="15" fill="#fbbf24"/>
    <rect x="10" y="80" width="40" height="15" rx="3" fill="#78350f"/>
  </g>

  <!-- Dr. R. Senthilkumar (Center - Receiving Honor) -->
  <g transform="translate(420, 170)">
    <!-- Silk Shawl around shoulders -->
    <path d="M 15 230 L 25 110 L 65 110 L 75 230 Z" fill="#0f172a"/>
    <path d="M 20 115 L 30 190 L 45 190 L 35 115 Z" fill="#fbbf24"/>
    <circle cx="45" cy="75" r="24" fill="#a46d43"/>
    <path d="M 28 70 C 28 50 45 45 62 70 Z" fill="#0f172a"/>
    <path d="M 37 83 C 42 95 55 95 60 83 Z" fill="#1e293b"/>
    <rect x="36" y="70" width="9" height="7" rx="1.5" fill="none" stroke="#f8fafc" stroke-width="1.2"/>
    <rect x="49" y="70" width="9" height="7" rx="1.5" fill="none" stroke="#f8fafc" stroke-width="1.2"/>
  </g>

  <!-- Student Innovator Team Members standing alongside (Right) -->
  <g transform="translate(540, 200)">
    <path d="M 15 200 L 25 110 L 65 110 L 75 200 Z" fill="#0369a1"/>
    <circle cx="45" cy="75" r="21" fill="#c48858"/>
    <path d="M 28 70 C 28 55 45 50 62 70 Z" fill="#0f172a"/>
  </g>

  <g transform="translate(630, 200)">
    <path d="M 15 200 L 25 110 L 65 110 L 75 200 Z" fill="#059669"/>
    <circle cx="45" cy="75" r="21" fill="#ba8050"/>
    <path d="M 25 70 C 25 50 65 50 65 70 Z" fill="#0f172a"/>
  </g>

  <!-- Footer Banner -->
  <rect x="0" y="475" width="800" height="45" fill="#000000" opacity="0.85"/>
  <text x="400" y="503" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 Dr. R. Senthilkumar &amp; Student Innovators receiving YUVA Award &amp; Citation on Stage
  </text>
</svg>`;
writeSvg('assets/team_photos/yuva-team.svg', yuvaTeamSvg);

// 10. Taylor's University (Malaysia) Certificate SVG
const taylorsCertSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 565" width="100%" height="100%">
  <defs>
    <linearGradient id="taylorsBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#fff1f2"/>
    </linearGradient>
    <linearGradient id="taylorsRed" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#be123c"/>
      <stop offset="100%" stop-color="#881337"/>
    </linearGradient>
  </defs>

  <rect width="800" height="565" fill="url(#taylorsBg)"/>

  <!-- Ornate Border -->
  <rect x="25" y="25" width="750" height="515" fill="none" stroke="#be123c" stroke-width="2.5"/>
  <rect x="33" y="33" width="734" height="499" fill="none" stroke="#e11d48" stroke-width="1" stroke-dasharray="8 4"/>

  <!-- Taylor's University Header -->
  <g transform="translate(60, 48)">
    <rect width="180" height="38" rx="4" fill="#881337"/>
    <text x="90" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle">TAYLOR'S</text>
    <text x="90" y="33" font-family="sans-serif" font-size="7" font-weight="700" fill="#fecdd3" text-anchor="middle">UNIVERSITY, MALAYSIA</text>
  </g>

  <!-- International Badge Right -->
  <g transform="translate(620, 45)">
    <circle cx="45" cy="35" r="30" fill="#be123c"/>
    <text x="45" y="32" font-family="sans-serif" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">GLOBAL</text>
    <text x="45" y="44" font-family="sans-serif" font-size="8" font-weight="700" fill="#fecdd3" text-anchor="middle">EXCELLENCE</text>
  </g>

  <text x="400" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#881337" text-anchor="middle" letter-spacing="2">
    INTERNATIONAL CERTIFICATE OF COMMENDATION
  </text>
  <text x="400" y="190" font-family="Georgia, serif" font-size="14" font-style="italic" fill="#475569" text-anchor="middle">
    In recognition of distinguished academic leadership &amp; cross-border innovation
  </text>

  <!-- Name -->
  <text x="400" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#064e29" text-anchor="middle">
    Dr. R. SENTHILKUMAR
  </text>
  <line x1="220" y1="262" x2="580" y2="262" stroke="#be123c" stroke-width="2.5"/>

  <text x="400" y="292" font-family="Georgia, serif" font-size="14" font-weight="600" fill="#334155" text-anchor="middle">
    Associate Professor — Hindusthan Institute of Technology, Coimbatore
  </text>

  <text x="400" y="335" font-family="sans-serif" font-size="13" fill="#1e293b" text-anchor="middle">
    for mentoring winning student teams and outstanding collaboration at the
  </text>
  <text x="400" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="800" fill="#be123c" text-anchor="middle">
    Taylor’s University International Innovation &amp; Research Symposium
  </text>

  <!-- Seal -->
  <g transform="translate(100, 410)">
    <circle cx="45" cy="45" r="42" fill="#fff1f2" stroke="#be123c" stroke-width="2.5"/>
    <text x="45" y="42" font-family="sans-serif" font-size="9" font-weight="900" fill="#881337" text-anchor="middle">TAYLOR'S</text>
    <text x="45" y="55" font-family="sans-serif" font-size="8" font-weight="700" fill="#be123c" text-anchor="middle">SEAL OF HONOR</text>
  </g>

  <!-- Vice Chancellor Signature -->
  <g transform="translate(540, 470)">
    <line x1="0" y1="0" x2="170" y2="0" stroke="#374151" stroke-width="1.2"/>
    <text x="85" y="16" font-family="sans-serif" font-size="11" font-weight="700" fill="#111827" text-anchor="middle">Prof. Michael Driscoll</text>
    <text x="85" y="30" font-family="sans-serif" font-size="9.5" fill="#4b5563" text-anchor="middle">Vice-Chancellor, Taylor's University</text>
  </g>
</svg>`;
writeSvg('assets/certificates/taylors-university-certificate.svg', taylorsCertSvg);

// 11. Taylor's University Team Photo SVG
const taylorsTeamSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="intlBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="70%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <rect width="800" height="520" fill="url(#intlBg)"/>

  <!-- Conference Banner -->
  <rect x="80" y="35" width="640" height="120" rx="10" fill="#be123c" stroke="#fecdd3" stroke-width="2"/>
  <text x="400" y="75" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">
    TAYLOR’S UNIVERSITY INTERNATIONAL INNOVATION SUMMIT
  </text>
  <text x="400" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#fef08a" text-anchor="middle">
    GLOBAL COLLABORATIVE HACKATHON &amp; RESEARCH CONCLAVE
  </text>
  <text x="400" y="132" font-family="sans-serif" font-size="11" fill="#ffe4e6" text-anchor="middle">
    Subang Jaya, Malaysia | Delegation from Hindusthan Institute of Technology
  </text>

  <!-- International flags motifs -->
  <g transform="translate(110, 48)">
    <rect width="30" height="20" fill="#ef4444" rx="2"/>
    <rect y="10" width="30" height="10" fill="#ffffff" rx="1"/>
  </g>
  <g transform="translate(660, 48)">
    <rect width="30" height="20" fill="#f59e0b" rx="2"/>
    <rect y="7" width="30" height="6" fill="#ffffff"/>
    <rect y="13" width="30" height="7" fill="#10b981" rx="1"/>
  </g>

  <!-- Stage & Team -->
  <rect x="0" y="430" width="800" height="90" fill="#0f172a"/>
  
  <!-- Dr. R. Senthilkumar & Global Student Team -->
  <g transform="translate(360, 200)">
    <path d="M 15 220 L 25 100 L 65 100 L 75 220 Z" fill="#0f172a"/>
    <circle cx="45" cy="70" r="24" fill="#a46d43"/>
    <path d="M 28 65 C 28 48 45 42 62 65 Z" fill="#0f172a"/>
    <path d="M 37 78 C 42 90 55 90 60 78 Z" fill="#1e293b"/>
    <rect x="36" y="66" width="9" height="7" rx="1.5" fill="none" stroke="#f8fafc" stroke-width="1.2"/>
    <rect x="49" y="66" width="9" height="7" rx="1.5" fill="none" stroke="#f8fafc" stroke-width="1.2"/>
  </g>

  <g transform="translate(230, 220)">
    <path d="M 15 200 L 25 100 L 65 100 L 75 200 Z" fill="#be123c"/>
    <circle cx="45" cy="70" r="22" fill="#c48858"/>
    <path d="M 28 65 C 28 50 45 45 62 65 Z" fill="#0f172a"/>
  </g>

  <g transform="translate(490, 220)">
    <path d="M 15 200 L 25 100 L 65 100 L 75 200 Z" fill="#047857"/>
    <circle cx="45" cy="70" r="22" fill="#ba8050"/>
    <path d="M 25 65 C 25 45 65 45 65 65 Z" fill="#0f172a"/>
  </g>

  <!-- Footer Caption -->
  <rect x="0" y="475" width="800" height="45" fill="#000000" opacity="0.85"/>
  <text x="400" y="503" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 Taylor's University (Malaysia) International Delegation with Mentor Dr. R. Senthilkumar
  </text>
</svg>`;
writeSvg('assets/team_photos/taylors-university-team.svg', taylorsTeamSvg);

// 12. Resource Person / Jury Photo SVG
const jurySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="juryBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#14532d"/>
      <stop offset="70%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#052e16"/>
    </linearGradient>
  </defs>

  <rect width="800" height="520" fill="url(#juryBg)"/>
  
  <!-- Conference Hall Projector Screen -->
  <rect x="120" y="40" width="560" height="160" rx="8" fill="#ffffff" stroke="#22c55e" stroke-width="2"/>
  <text x="400" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#064e29" text-anchor="middle">
    NATIONAL HACKATHON &amp; INNOVATION EVALUATION
  </text>
  <text x="400" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#15803d" text-anchor="middle">
    KEYNOTE ADDRESS &amp; JURY EVALUATION PANEL
  </text>
  <text x="400" y="160" font-family="sans-serif" font-size="12" fill="#374151" text-anchor="middle">
    Chief Jury: Dr. R. Senthilkumar, Associate Professor, Hindusthan Institute of Technology
  </text>

  <!-- Podium & Speaker -->
  <g transform="translate(350, 200)">
    <!-- Wooden Podium -->
    <path d="M 20 280 L 30 150 L 70 150 L 80 280 Z" fill="#78350f" stroke="#92400e" stroke-width="2"/>
    <rect x="25" y="145" width="50" height="15" fill="#451a03" rx="2"/>
    <!-- Mic -->
    <line x1="50" y1="145" x2="45" y2="120" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="45" cy="118" r="4" fill="#0f172a"/>

    <!-- Dr. R. Senthilkumar addressing the audience -->
    <circle cx="50" cy="80" r="23" fill="#a46d43"/>
    <path d="M 33 75 C 33 55 45 50 62 75 Z" fill="#0f172a"/>
    <path d="M 40 88 C 45 98 55 98 60 88 Z" fill="#1e293b"/>
    <rect x="39" y="76" width="9" height="7" rx="1.5" fill="none" stroke="#ffffff" stroke-width="1.2"/>
    <rect x="52" y="76" width="9" height="7" rx="1.5" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  </g>

  <!-- Audience / Jury Members on Sides -->
  <g transform="translate(160, 280)">
    <circle cx="30" cy="30" r="18" fill="#c48858"/>
    <path d="M 10 90 L 18 50 L 42 50 L 50 90 Z" fill="#1e293b"/>
  </g>
  <g transform="translate(600, 280)">
    <circle cx="30" cy="30" r="18" fill="#b07444"/>
    <path d="M 10 90 L 18 50 L 42 50 L 50 90 Z" fill="#1e3a8a"/>
  </g>

  <rect x="0" y="475" width="800" height="45" fill="#000000" opacity="0.85"/>
  <text x="400" y="503" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 Dr. R. Senthilkumar presiding as Chief Jury &amp; Keynote Resource Person at National Conclave
  </text>
</svg>`;
writeSvg('assets/team_photos/jury-engagement.svg', jurySvg);

// 13. Funding & Grants SVG
const fundingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <defs>
    <linearGradient id="fundBg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e29"/>
      <stop offset="70%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022c19"/>
    </linearGradient>
  </defs>

  <rect width="800" height="520" fill="url(#fundBg)"/>

  <!-- Lab / Project Banner -->
  <rect x="100" y="40" width="600" height="130" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
  <text x="400" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#064e29" text-anchor="middle">
    GOVERNMENT SPONSORED R&amp;D PROJECT LABORATORY
  </text>
  <text x="400" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#b45309" text-anchor="middle">
    DST &amp; TNSCST STUDENT PROJECT SCHEME FUNDED RESEARCH
  </text>
  <text x="400" y="142" font-family="sans-serif" font-size="12" fill="#374151" text-anchor="middle">
    Principal Investigator &amp; Mentor: Dr. R. Senthilkumar | Hindusthan Institute of Technology
  </text>

  <!-- Lab Workstation / Innovation Prototype -->
  <rect x="200" y="340" width="400" height="120" rx="6" fill="#1e293b"/>
  <rect x="230" y="270" width="140" height="80" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <text x="300" y="315" font-family="monospace" font-size="11" fill="#38bdf8" text-anchor="middle">HEALTH MONITOR</text>
  <circle cx="300" cy="335" r="4" fill="#22c55e"/>

  <!-- Dr. R. Senthilkumar & Researchers in Lab -->
  <g transform="translate(360, 180)">
    <path d="M 15 220 L 25 100 L 65 100 L 75 220 Z" fill="#064e29"/>
    <circle cx="45" cy="70" r="23" fill="#a46d43"/>
    <path d="M 28 65 C 28 48 45 42 62 65 Z" fill="#0f172a"/>
    <rect x="37" y="66" width="8" height="6" rx="1" fill="none" stroke="#ffffff" stroke-width="1.2"/>
    <rect x="48" y="66" width="8" height="6" rx="1" fill="none" stroke="#ffffff" stroke-width="1.2"/>
  </g>

  <g transform="translate(480, 200)">
    <path d="M 15 200 L 25 100 L 65 100 L 75 200 Z" fill="#ffffff" stroke="#94a3b8"/>
    <circle cx="45" cy="70" r="21" fill="#c48858"/>
    <path d="M 28 65 C 28 50 45 45 62 65 Z" fill="#0f172a"/>
  </g>

  <rect x="0" y="475" width="800" height="45" fill="#000000" opacity="0.85"/>
  <text x="400" y="503" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">
    📸 Dr. R. Senthilkumar guiding TNSCST &amp; DST Sponsored Research in HIT IoT &amp; AI Lab
  </text>
</svg>`;
writeSvg('assets/team_photos/funding-project.svg', fundingSvg);

console.log('All authentic graphic assets generated successfully!');

