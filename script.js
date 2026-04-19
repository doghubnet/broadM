const destinations = [
  { key: "usa", name: "USA", flag: "🇺🇸", image: "/images/destinations/usa.webp", pulse: "94%", why: "The USA offers globally ranked universities, high research funding, and broad career paths across STEM, business, and creative fields.", scholarships: "Merit scholarships, assistantships, athletics, Fulbright, and departmental fellowships.", work: "Part-time work during studies, with post-study routes such as OPT and CPT in many programs.", stability: "Stable institutions, a deep innovation economy, and strong long-term education investment.", life: "Higher living costs in major cities, with active campus culture and wide student communities.", unis: [["Harvard University", "Ivy League leader in law, business, and policy."], ["Stanford University", "Innovation powerhouse in Silicon Valley."], ["MIT", "Top engineering and technology institution."], ["NYU", "Global urban campus in New York City."]] },
  { key: "italy", name: "Italy", flag: "🇮🇹", image: "/images/destinations/italy.webp", pulse: "96%", why: "Italy combines historic universities, strong design and architecture fields, and access to wider European opportunities.", scholarships: "DSU regional grants, merit awards, tuition waivers, and Erasmus mobility support.", work: "Part-time work during studies, with growing opportunities in design, engineering, and tourism.", stability: "EU framework, stable academic systems, and continued international education growth.", life: "Moderate costs outside Milan and Rome, plus a rich culture and strong student life.", unis: [["University of Bologna", "Historic institution with broad academic strength."], ["Politecnico di Milano", "Top engineering and design university."], ["Sapienza University of Rome", "Large research university with international programs."], ["University of Padua", "Strong science and medicine legacy."]] },
  { key: "austria", name: "Austria", flag: "🇦🇹", image: "/images/destinations/austria.webp", pulse: "95%", why: "Austria offers quality of life, respected public universities, and a central European location for mobility and networking.", scholarships: "OeAD grants, mobility scholarships, tuition support, and university merit options.", work: "Student part-time options and strong graduate prospects in engineering, research, and health.", stability: "Politically stable EU country with a resilient economy and strong social systems.", life: "Balanced living costs, clean cities, and excellent transport infrastructure.", unis: [["University of Vienna", "Historic institution across humanities and sciences."], ["TU Wien", "Leading technology and engineering university."], ["Medical University of Vienna", "Respected medical training and research."], ["WU Vienna", "Strong business-focused university."]] },
  { key: "china", name: "China", flag: "🇨🇳", image: "/images/destinations/china.webp", pulse: "93%", why: "China blends top-ranked universities, advanced technology ecosystems, and growing scholarship channels for international students.", scholarships: "CSC scholarships, provincial grants, university awards, and bilateral programs.", work: "Rules vary by city and institution, with stronger opportunities in tech and manufacturing hubs.", stability: "Large diversified economy with strong infrastructure and long-term education investment.", life: "Affordable to premium cost ranges by city, with a fast-paced student experience.", unis: [["Tsinghua University", "Elite engineering and policy institution."], ["Peking University", "Comprehensive top-ranked academic leader."], ["Fudan University", "Strong in business, medicine, and social sciences."], ["Shanghai Jiao Tong", "High-impact engineering and innovation programs."]] },
  { key: "france", name: "France", flag: "🇫🇷", image: "/images/destinations/france.webp", pulse: "95%", why: "France delivers respected degrees, research strength, and prestigious institutions across arts, sciences, and engineering.", scholarships: "Eiffel scholarships, CROUS support, campus grants, and merit-based tuition discounts.", work: "Students can work part-time, and post-study permits support career transition in many sectors.", stability: "Stable democratic institutions and a diversified economy.", life: "Paris is premium cost, while other cities offer moderate costs and a rich student culture.", unis: [["Sorbonne University", "Strong research in sciences and humanities."], ["École Polytechnique", "Elite STEM grande école with global profile."], ["Sciences Po", "Top social sciences and policy school."], ["Université PSL", "Research-intensive federation of elite schools."]] },
  { key: "germany", name: "Germany", flag: "🇩🇪", image: "/images/destinations/germany.webp", pulse: "97%", why: "Germany is known for engineering, applied research, and strong paths from study to employment in Europe’s largest economy.", scholarships: "DAAD scholarships, foundations, industry grants, and university fellowships.", work: "Strong student part-time rights and practical post-study residence options.", stability: "High economic resilience, strong institutions, and industrial leadership.", life: "Moderate living costs in many cities, excellent transit, and safe student settings.", unis: [["Technical University of Munich", "Global technical leader."], ["Heidelberg University", "Germany’s oldest research university."], ["LMU Munich", "Strong cross-disciplinary research profile."], ["RWTH Aachen", "Top engineering and applied science institution."]] },
  { key: "uk", name: "UK", flag: "🇬🇧", image: "/images/destinations/uk.webp", pulse: "94%", why: "The UK offers globally known degrees, shorter master programs, and strong employer recognition worldwide.", scholarships: "Chevening, Commonwealth, GREAT scholarships, and university merit awards.", work: "Part-time work during studies and Graduate Route post-study options are widely used.", stability: "Stable institutions, a sophisticated economy, and strong global business links.", life: "Higher costs in London, with active campus life and broad multicultural communities.", unis: [["University of Oxford", "Historic global academic leader."], ["University of Cambridge", "World-class research and tutorial model."], ["Imperial College London", "STEM-focused excellence in central London."], ["UCL", "Major multidisciplinary research university."]] },
  { key: "romania", name: "Romania", flag: "🇷🇴", image: "/images/destinations/romania.webp", pulse: "92%", why: "Romania provides affordable European education, growing English-taught programs, and strong value for money.", scholarships: "Romanian Government scholarships, university merit awards, and bilateral funding routes.", work: "Part-time student opportunities and growing entry-level jobs in IT, services, and engineering.", stability: "EU member with steady growth and improving international academic reach.", life: "Lower living costs than many EU capitals, with welcoming student cities like Cluj and Bucharest.", unis: [["University of Bucharest", "Historic comprehensive university in the capital."], ["Babeș-Bolyai University", "Top multicultural university in Cluj-Napoca."], ["Politehnica University of Bucharest", "Leading engineering institution."], ["Alexandru Ioan Cuza University", "Respected public research university."]] }
];

const testimonials = [
  { img: "/images/testimonials/liya.webp", name: "Liya M.", country: "Italy", q: "Broad Mobility gave me clear, step-by-step support from consultation to approval." },
  { img: "/images/testimonials/abel.webp", name: "Abel T.", country: "Germany", q: "Excellent interview coaching and document quality improved my confidence." },
  { img: "/images/testimonials/sara.webp", name: "Sara K.", country: "UK", q: "Professional communication and fast response throughout the process." },
  { img: "/images/testimonials/nahom.webp", name: "Nahom B.", country: "France", q: "Their strategy helped me choose the right destination and timeline." },
  { img: "/images/testimonials/bethel.webp", name: "Bethel R.", country: "Austria", q: "Premium guidance with practical scholarship and visa preparation advice." },
  { img: "/images/testimonials/yosef.webp", name: "Yosef G.", country: "USA", q: "The visa path became simple and structured with clear milestones." },
  { img: "/images/testimonials/selam.webp", name: "Selam A.", country: "Romania", q: "Fast response and transparent communication made every stage stress-free." },
  { img: "/images/testimonials/mikias.webp", name: "Mikias D.", country: "China", q: "Outstanding country strategy and interview preparation helped me succeed." },
  { img: "/images/testimonials/hana.webp", name: "Hana K.", country: "France", q: "Professional support from Addis Ababa to final approval with international standards." }
];

const siteMap = [
  { title: "Home", href: "#home", group: "Page" }, { title: "About Us", href: "#about-us", group: "Page" }, { title: "Services", href: "#services", group: "Page" }, { title: "Destinations", href: "#destinations", group: "Page" }, { title: "Success Stories", href: "#impact", group: "Page" }, { title: "How It Works", href: "#how-it-works", group: "Page" }, { title: "Testimonials", href: "#testimonials", group: "Page" }, { title: "Contact", href: "#contact", group: "Page" },
  { title: "Student Visa Consultancy", href: "#services", group: "Service" }, { title: "Tourist Visa Consultancy", href: "#services", group: "Service" }, { title: "Document Preparation and Interview Coaching", href: "#services", group: "Service" }, { title: "University Admission Support", href: "#services", group: "Service" },
  ...destinations.map((d) => ({ title: d.name, href: "#destinations", group: "Destination" })), { title: "FAQ", href: "#faq", group: "Section" }
];

const body = document.body;
const siteHeader = document.getElementById("siteHeader");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobilePanel = document.getElementById("mobilePanel");
const consultModal = document.getElementById("consultModal");
const countryModal = document.getElementById("countryModal");
const legalModal = document.getElementById("legalModal");
const searchModal = document.getElementById("searchModal");
const destinationGrid = document.getElementById("destinationGrid");
const testimonialRowA = document.getElementById("testimonialRowA");
const testimonialRowB = document.getElementById("testimonialRowB");
const impactCount = document.getElementById("impactCount");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const dynamicUploads = document.getElementById("dynamicUploads");
const destinationTemplate = document.getElementById("destinationTemplate");
const testimonialTemplate = document.getElementById("testimonialTemplate");

const fallbackSvg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#dfe7f1"/>
  <rect x="70" y="70" width="1060" height="660" rx="36" fill="#f8f9fa" stroke="#cfd8e3"/>
  <text x="600" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" fill="#001f3f">Broad Mobility</text>
  <text x="600" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#5f6b7a">Image placeholder</text>
</svg>
`);

function syncBodyLock() {
  const hasOpenModal = document.querySelector(".modal.open");
  const hasOpenMenu = mobilePanel.classList.contains("open");
  body.style.overflow = hasOpenModal || hasOpenMenu ? "hidden" : "";
}
function openModal(modal) { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); syncBodyLock(); }
function closeModal(modal) { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); syncBodyLock(); }
function setHeaderState() { siteHeader.classList.toggle("scrolled", window.scrollY > 16); }
function setActiveNav() {
  const sections = ["home", "about-us", "services", "destinations", "impact", "how-it-works", "testimonials", "contact"];
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  let current = "home";
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= 180) current = id;
  }
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
function openMenu() { mobilePanel.classList.add("open"); mobilePanel.setAttribute("aria-hidden", "false"); menuOpen.setAttribute("aria-expanded", "true"); syncBodyLock(); }
function closeMenu() { mobilePanel.classList.remove("open"); mobilePanel.setAttribute("aria-hidden", "true"); menuOpen.setAttribute("aria-expanded", "false"); syncBodyLock(); }

function openCountry(data) {
  document.getElementById("countryHero").src = data.image;
  document.getElementById("countryHero").alt = `${data.name} destination image`;
  document.getElementById("countryTitleLabel").textContent = `${data.name} ${data.flag}`;
  document.getElementById("countryWhy").textContent = data.why;
  document.getElementById("countryScholarships").textContent = data.scholarships;
  document.getElementById("countryWork").textContent = data.work;
  document.getElementById("countryStability").textContent = data.stability;
  document.getElementById("countryLife").textContent = data.life;
  const universityGrid = document.getElementById("universityGrid");
  universityGrid.innerHTML = data.unis.map(([name, desc]) => `<article class="card" style="padding:16px;border-radius:18px"><h5 style="margin:0;color:var(--navy)">${name}</h5><p style="margin-top:8px;color:var(--muted)">${desc}</p></article>`).join("");
  openModal(countryModal);
}
function openLegal(title, bodyText) { document.getElementById("legalTitle").textContent = title; document.getElementById("legalBody").textContent = bodyText; openModal(legalModal); }
function openSearch() { openModal(searchModal); renderSearchResults(""); setTimeout(() => searchInput.focus(), 50); }
function attachFallback(img) {
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied === "1") return;
    img.dataset.fallbackApplied = "1";
    img.src = fallbackSvg;
  });
}
function renderDestinations() {
  destinationGrid.innerHTML = "";
  destinations.forEach((d, index) => {
    const node = destinationTemplate.content.cloneNode(true);
    const article = node.querySelector(".destination");
    const img = node.querySelector("img");
    article.dataset.country = d.key;
    if (index === 0 || index === 3) article.classList.add("span-2");
    img.src = d.image;
    img.alt = `${d.name} destination`;
    attachFallback(img);
    node.querySelector("h3").textContent = `${d.name} ${d.flag}`;
    node.querySelector("p").textContent = `Success pulse: ${d.pulse}`;
    article.addEventListener("click", () => openCountry(d));
    article.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCountry(d);
      }
    });
    destinationGrid.appendChild(node);
  });
}
function renderTestimonials() {
  const cards = testimonials.flatMap((t) => [t, t]).map((t) => {
    const node = testimonialTemplate.content.cloneNode(true);
    const article = node.querySelector(".testimonial");
    const img = node.querySelector("img");
    img.src = t.img;
    img.alt = `${t.name} portrait`;
    attachFallback(img);
    node.querySelector("strong").textContent = t.name;
    node.querySelector(".muted").textContent = t.country;
    node.querySelector("p").textContent = t.q;
    return article.outerHTML;
  }).join("");
  testimonialRowA.innerHTML = cards;
  testimonialRowB.innerHTML = cards;
}
function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const results = siteMap.filter((entry) => entry.title.toLowerCase().includes(q));
  if (!q) {
    searchResults.innerHTML = '<button class="search-result" type="button" data-jump="#services">Search starts here<small>Type a page name, service, or destination.</small></button>';
    return;
  }
  if (!results.length) {
    searchResults.innerHTML = '<div class="search-result">No results found<small>Try a shorter word or a page name.</small></div>';
    return;
  }
  searchResults.innerHTML = results.map((r) => `<button class="search-result" type="button" data-jump="${r.href}">${r.title}<small>${r.group}</small></button>`).join("");
}
function animateCounters() {
  const stat = document.querySelector('[data-count="51"]');
  const target = 51;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / 1800, 1);
    stat.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toString();
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  const impactStart = performance.now();
  function tickImpact(now) {
    const p = Math.min((now - impactStart) / 2000, 1);
    impactCount.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toString();
    if (p < 1) requestAnimationFrame(tickImpact);
  }
  requestAnimationFrame(tickImpact);
}
function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in"); });
  }, { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
function bindFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggleIcon = btn.querySelector("span");
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".faq-item").forEach((other) => {
        const otherBtn = other.querySelector(".faq-question");
        otherBtn.setAttribute("aria-expanded", "false");
        other.querySelector(".faq-answer").style.maxHeight = null;
        otherBtn.querySelector("span").textContent = "+";
      });
      if (!open) {
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        toggleIcon.textContent = "−";
      }
    });
  });
}
function bindEvents() {
  document.getElementById("consultOpenTop").addEventListener("click", () => openModal(consultModal));
  document.getElementById("consultOpenHero").addEventListener("click", () => openModal(consultModal));
  document.getElementById("consultOpenAbout").addEventListener("click", () => openModal(consultModal));
  document.getElementById("consultOpenMobile").addEventListener("click", () => { closeMenu(); openModal(consultModal); });
  document.getElementById("consultOpenFooter").addEventListener("click", () => openModal(consultModal));
  document.getElementById("confidenceOpen").addEventListener("click", () => openModal(consultModal));
  document.getElementById("exploreDestinations").addEventListener("click", () => document.getElementById("destinations").scrollIntoView({ behavior: "smooth", block: "start" }));
  menuOpen.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  document.getElementById("searchOpen").addEventListener("click", openSearch);
  document.getElementById("searchOpenMobile").addEventListener("click", () => { closeMenu(); openSearch(); });
  document.querySelectorAll(".mobile-link").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => closeModal(document.getElementById(btn.dataset.close))));
  document.getElementById("termsOpen").addEventListener("click", () => openLegal("Terms of Service", "By using Broad Mobility services, you agree to provide accurate information, comply with destination-country regulations, and accept that visa outcomes depend on embassy decisions and document quality. Guidance is advisory and professional in nature."));
  document.getElementById("privacyOpen").addEventListener("click", () => openLegal("Privacy Policy", "Broad Mobility uses personal information only for consultation, application preparation, and communication. Reasonable safeguards are used, and personal data is not sold. Contact the team for access or correction requests."));
  document.getElementById("appLevel").addEventListener("change", (e) => {
    const v = e.target.value;
    if (v === "Bachelor") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Grade 10 and 12 National Exams<input type="file" name="bachelorDocs" multiple style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else if (v === "Masters") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Degree Certificate<input type="file" name="mastersDegree" multiple style="display:block;margin-top:10px;width:100%;color:#fff"></label><label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Transcript or Student Copy<input type="file" name="mastersTranscript" multiple style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else dynamicUploads.innerHTML = "";
  });
  document.getElementById("consultForm").addEventListener("submit", (e) => { e.preventDefault(); alert("Form ready for your backend integration."); });
  document.addEventListener("click", (e) => {
    if (e.target === consultModal) closeModal(consultModal);
    if (e.target === countryModal) closeModal(countryModal);
    if (e.target === legalModal) closeModal(legalModal);
    if (e.target === searchModal) closeModal(searchModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeModal(consultModal);
      closeModal(countryModal);
      closeModal(legalModal);
      closeModal(searchModal);
    }
  });
  searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
  searchResults.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-jump]");
    if (!btn) return;
    const target = document.querySelector(btn.dataset.jump);
    closeModal(searchModal);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("searchClear").addEventListener("click", () => { searchInput.value = ""; renderSearchResults(""); searchInput.focus(); });
}

function syncMenuScroll() { setHeaderState(); setActiveNav(); }
function init() {
  renderDestinations();
  renderTestimonials();
  bindFaq();
  bindEvents();
  revealOnScroll();
  animateCounters();
  renderSearchResults("");
  syncMenuScroll();
  document.querySelectorAll("img").forEach(attachFallback);
}
window.addEventListener("scroll", syncMenuScroll, { passive: true });
window.addEventListener("resize", setActiveNav, { passive: true });
init();
