import { supabase } from "./src/lib/supabase.js";

const destinations = [
  { key: "usa", name: "USA", flag: "🇺🇸", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The USA offers globally ranked universities, high research funding, and broad career paths across STEM, business, and creative fields.", scholarships: "Merit scholarships, assistantships, athletics, Fulbright, and departmental fellowships.", work: "Part-time work during studies, with post-study routes such as OPT and CPT in many programs.", stability: "Stable institutions, a deep innovation economy, and strong long-term education investment.", life: "Higher living costs in major cities, with active campus culture and wide student communities.", unis: [["Harvard University", "Ivy League research university with global academic recognition."], ["Stanford University", "Research university known for technology, entrepreneurship, and innovation."], ["Massachusetts Institute of Technology", "Leading institution for engineering, science, and technology."], ["University of California, Berkeley", "Major public research university with strong global reputation."], ["New York University", "Large private university with strong international and urban programs."]] },
  { key: "italy", name: "Italy", flag: "🇮🇹", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80", pulse: "96%", why: "Italy combines historic universities, strong design and architecture fields, and access to wider European opportunities.", scholarships: "DSU regional grants, merit awards, tuition waivers, and Erasmus mobility support.", work: "Part-time work during studies, with growing opportunities in design, engineering, and tourism.", stability: "EU framework, stable academic systems, and continued international education growth.", life: "Moderate costs outside Milan and Rome, plus a rich culture and strong student life.", unis: [["University of Bologna", "Historic public university with broad academic strength."], ["Sapienza University of Rome", "Large public research university with many international programs."], ["University of Padua", "Major public university known for research and academic tradition."], ["Politecnico di Milano", "Leading technical university for engineering, architecture, and design."], ["University of Milan", "Large public university with strong research and professional programs."]] },
  { key: "austria", name: "Austria", flag: "🇦🇹", image: "https://i0.wp.com/globalgrasshopper.com/wp-content/uploads/2020/05/Innsbruck-Austria.jpg?resize=840%2C577&ssl=1", pulse: "95%", why: "Austria offers quality of life, respected public universities, and a central European location for mobility and networking.", scholarships: "OeAD grants, mobility scholarships, tuition support, and university merit options.", work: "Student part-time options and strong graduate prospects in engineering, research, and health.", stability: "Politically stable EU country with a resilient economy and strong social systems.", life: "Balanced living costs, clean cities, and excellent transport infrastructure.", unis: [["University of Vienna", "Historic public university with broad academic programs."], ["TU Wien", "Leading technical university for engineering and applied sciences."], ["Graz University of Technology", "Public technical university known for engineering and research."], ["University of Innsbruck", "Public university with strong research and international student programs."], ["Vienna University of Economics and Business", "Major business and economics university in Vienna."]] },
  { key: "china", name: "China", flag: "🇨🇳", image: "https://daoinsights.com/wp-content/uploads/2021/09/1505870953_oMHAlr-1870x1052.jpeg", pulse: "93%", why: "China blends top-ranked universities, advanced technology ecosystems, and growing scholarship channels for international students.", scholarships: "CSC scholarships, provincial grants, university awards, and bilateral programs.", work: "Rules vary by city and institution, with stronger opportunities in tech and manufacturing hubs.", stability: "Large diversified economy with strong infrastructure and long-term education investment.", life: "Affordable to premium cost ranges by city, with a fast-paced student experience.", unis: [["Tsinghua University", "Top research university known for engineering, technology, and policy."], ["Peking University", "Comprehensive research university with strong global reputation."], ["Fudan University", "Major research university in Shanghai with broad academic strength."], ["Shanghai Jiao Tong University", "Leading university for engineering, business, and innovation."], ["Zhejiang University", "Large research university with strong science and technology programs."]] },
  { key: "france", name: "France", flag: "🇫🇷", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80", pulse: "95%", why: "France delivers respected degrees, research strength, and prestigious institutions across arts, sciences, and engineering.", scholarships: "Eiffel scholarships, CROUS support, campus grants, and merit-based tuition discounts.", work: "Students can work part-time, and post-study permits support career transition in many sectors.", stability: "Stable democratic institutions and a diversified economy.", life: "Paris is premium cost, while other cities offer moderate costs and a rich student culture.", unis: [["Sorbonne University", "Major research university with strength in humanities, science, and medicine."], ["Université Paris-Saclay", "Research-intensive university known for science and engineering."], ["École Polytechnique", "Highly selective grande école focused on science and engineering."], ["Sciences Po", "Well-known institution for social sciences, politics, and international affairs."], ["Université PSL", "Research university formed from leading French institutions."]] },
  { key: "germany", name: "Germany", flag: "🇩🇪", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80", pulse: "97%", why: "Germany is known for engineering, applied research, and strong paths from study to employment in Europe’s largest economy.", scholarships: "DAAD scholarships, foundations, industry grants, and university fellowships.", work: "Strong student part-time rights and practical post-study residence options.", stability: "High economic resilience, strong institutions, and industrial leadership.", life: "Moderate living costs in many cities, excellent transit, and safe student settings.", unis: [["Technical University of Munich", "Leading technical university with strong engineering and science programs."], ["Ludwig Maximilian University of Munich", "Major research university with broad academic strength."], ["Heidelberg University", "Historic research university known for academic excellence."], ["RWTH Aachen University", "Leading engineering and applied sciences university."], ["Humboldt University of Berlin", "Research university with strong humanities, sciences, and social sciences."]] },
  { key: "uk", name: "UK", flag: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The UK offers globally known degrees, shorter master programs, and strong employer recognition worldwide.", scholarships: "Chevening, Commonwealth, GREAT scholarships, and university merit awards.", work: "Part-time work during studies and Graduate Route post-study options are widely used.", stability: "Stable institutions, a sophisticated economy, and strong global business links.", life: "Higher costs in London, with active campus life and broad multicultural communities.", unis: [["University of Oxford", "Historic research university with global academic recognition."], ["University of Cambridge", "World-class research university with a strong tutorial tradition."], ["Imperial College London", "Leading institution for science, engineering, medicine, and business."], ["University College London", "Major multidisciplinary research university in London."], ["University of Edinburgh", "Respected research university with strong international programs."]] },
  { key: "romania", name: "Romania", flag: "🇷🇴", image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1400&q=80", pulse: "92%", why: "Romania provides affordable European education, growing English-taught programs, and strong value for money.", scholarships: "Romanian Government scholarships, university merit awards, and bilateral funding routes.", work: "Part-time student opportunities and growing entry-level jobs in IT, services, and engineering.", stability: "EU member with steady growth and improving international academic reach.", life: "Lower living costs than many EU capitals, with welcoming student cities like Cluj and Bucharest.", unis: [["University of Bucharest", "Historic public university with broad academic programs."], ["Babeș-Bolyai University", "Major public university in Cluj-Napoca with multilingual programs."], ["Politehnica University of Bucharest", "Leading technical university for engineering and applied sciences."], ["Alexandru Ioan Cuza University of Iași", "Historic public university with strong research and academic programs."], ["Carol Davila University of Medicine and Pharmacy", "Major medical and pharmacy university in Bucharest."]] }
];

const testimonials = [
  { img: "https://static.vecteezy.com/system/resources/previews/039/334/804/large_2x/ai-generated-indian-female-student-free-photo.jpg", name: "Liya M.", country: "Italy", q: "Broad Mobility gave me clear, step-by-step support from consultation to approval." },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAwGwNGnsOePzcAHZmLgTBVglmNJdxdjC8Q&s", name: "Abel T.", country: "Germany", q: "Exceptional interview coaching and document quality improved my confidence." },
  { img: "https://images.generated.photos/E1HM3sJC877Av9GBetIjxFC1T2iQeGLh8HNznemmZ4Y/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQwOTYyLmpwZw.jpg", name: "Sara K.", country: "United Kingdom", q: "Professional communication and fast response throughout the entire process." },
  { img: "/images/testimonials/nahom.webp", name: "Nahom B.", country: "France", q: "Their strategy helped me choose the right destination and timeline." },
  { img: "https://static.vecteezy.com/system/resources/thumbnails/028/633/357/small/cute-ethiopian-woman-generate-ai-photo.jpeg", name: "Bethel R.", country: "Austria", q: "Premium guidance with practical scholarship and visa preparation advice." },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzv11DlwTVx5MxQDumc57Q_DnBQSA05l0Zg&s", name: "Yosef G.", country: "United States", q: "The visa pathway became simple and structured with clear milestones." },
  { img: "https://i.imgur.com/vKCNhuK.png", name: "Selam A.", country: "Romania", q: "Transparent communication made every stage easier to understand." },
  { img: "https://img.freepik.com/premium-photo/illustration-man-abstract-art-ai-generated_57312-1264.jpg", name: "Mikiyas D.", country: "China", q: "Their country strategy and interview preparation helped me move with confidence." }
];


const embassyProcessSteps = [
  { type: "document", text: "Gather documents" },
  { type: "checklist", text: "Complete application form" },
  { type: "calendar", text: "Book appointment or submit online" },
  { type: "biometrics", text: "Attend biometrics or interview" },
  { type: "clock", text: "Track decision" },
  { type: "passport", text: "Collect passport and prepare travel" }
];

function getEmbassyStepIcon(type) {
  const icons = {
    document: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6"/><path d="M10 17h4"/></svg>',
    checklist: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="M4 6l1.4 1.4L8 4.8"/><path d="M4 12l1.4 1.4L8 10.8"/><path d="M4 18l1.4 1.4L8 16.8"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16"/><path d="M9 15h3"/><path d="M14 15h1"/></svg>',
    biometrics: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M7 15.5c-1.8.8-3 2.3-3 4.5"/><path d="M17 15.5c1.8.8 3 2.3 3 4.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    passport: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9 17h6"/><path d="M10.5 11l1 1 2-2"/></svg>'
  };
  return icons[type] || icons.document;
}

function renderEmbassyProcess() {
  return `<div class="embassy-process-list">${embassyProcessSteps.map((step) => `
    <div class="embassy-process-step">
      <span class="embassy-process-icon">${getEmbassyStepIcon(step.type)}</span>
      <span class="embassy-process-text">${step.text}</span>
    </div>`).join("")}</div>`;
}

const siteMap = [
  { title: "Home", href: "#home", group: "Page" }, { title: "About Us", href: "#about-us", group: "Page" }, { title: "Services", href: "#services", group: "Page" }, { title: "Destinations", href: "#destinations", group: "Page" }, { title: "Success Stories", href: "#impact", group: "Page" }, { title: "Process", href: "#how-it-works", group: "Page" }, { title: "Testimonials", href: "#testimonials", group: "Page" }, { title: "Newsroom", href: "#newsroom", group: "Page" }, { title: "Contact", href: "#contact", group: "Page" },
  { title: "Student Visa Consultancy", href: "#services", group: "Service" }, { title: "Tourist Visa Consultancy", href: "#services", group: "Service" }, { title: "Document Preparation and Interview Coaching", href: "#services", group: "Service" }, { title: "Work Visa Consultancy", href: "#services", group: "Service" },
  ...destinations.map((d) => ({ title: d.name, href: "#destinations", group: "Destination" })), { title: "FAQ", href: "#faq", group: "Section" }
];

const body = document.body;
const siteHeader = document.getElementById("siteHeader");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobilePanel = document.getElementById("mobilePanel");
const consultModal = document.getElementById("consultModal");
const countryModal = document.getElementById("countryModal");
const moreCountriesModal = document.getElementById("moreCountriesModal");
const legalModal = document.getElementById("legalModal");
const searchModal = document.getElementById("searchModal");
const destinationGrid = document.getElementById("destinationGrid");
const testimonialRowA = document.getElementById("testimonialRowA");
const testimonialRowB = document.getElementById("testimonialRowB");
const impactCount = document.getElementById("impactCount");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const dynamicUploads = document.getElementById("dynamicUploads");
const moreCountriesList = document.getElementById("moreCountriesList");
const countryBackToList = document.getElementById("countryBackToList");
const destinationTemplate = document.getElementById("destinationTemplate");
const testimonialTemplate = document.getElementById("testimonialTemplate");
const impactCarousel = document.getElementById("impactCarousel");
const themeToggle = document.getElementById("themeToggle");
const THEME_STORAGE_KEY = "broadMobilityTheme";

const featuredDestinationNames = new Set([
  ...destinations.map((country) => country.name.toLowerCase()),
  "usa",
  "united states",
  "united states of america",
  "italy",
  "austria",
  "china",
  "france",
  "germany",
  "uk",
  "united kingdom",
  "romania"
]);
const featuredDestinationKeys = new Set(destinations.map((country) => country.key.toLowerCase()));
const extraCountryProfiles = window.extraCountryProfiles || [];
const extraCountries = extraCountryProfiles.filter((country) => !featuredDestinationNames.has(country.name.toLowerCase()) && !featuredDestinationKeys.has(country.key.toLowerCase()));
const allCountriesMap = new Map([...destinations, ...extraCountries].map((country) => [country.key, country]));

const fallbackSvg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#dfe7f1"/>
  <rect x="70" y="70" width="1060" height="660" rx="36" fill="#f8f9fa" stroke="#cfd8e3"/>
  <text x="600" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" fill="#001f3f">Broad Mobility</text>
  <text x="600" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#5f6b7a">Destination image unavailable</text>
</svg>
`);


function getStoredThemePreference() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (_error) {
    return null;
  }
}

function storeThemePreference(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (_error) {}
}

function applyThemePreference(theme, { persist = true } = {}) {
  const isDark = theme === "dark";
  body.classList.toggle("dark-theme", isDark);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  }

  if (persist) storeThemePreference(isDark ? "dark" : "light");
}

function initThemeToggle() {
  const storedTheme = getStoredThemePreference();
  applyThemePreference(storedTheme === "dark" ? "dark" : "light", { persist: false });
}

function syncBodyLock() {
  const hasOpenModal = document.querySelector(".modal.open");
  const hasOpenMenu = mobilePanel.classList.contains("open");
  body.style.overflow = hasOpenModal || hasOpenMenu ? "hidden" : "";
}
function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  const shell = modal.querySelector(".motion-modal");
  if (shell) requestAnimationFrame(() => shell.classList.add("is-open"));
  syncBodyLock();
}
function closeModal(modal) {
  const shell = modal.querySelector(".motion-modal");
  if (shell) shell.classList.remove("is-open");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  syncBodyLock();
}
function setHeaderState() { siteHeader.classList.toggle("scrolled", window.scrollY > 16); }
function setActiveNav() {
  const sections = ["home", "about-us", "services", "destinations", "impact", "how-it-works", "testimonials", "newsroom", "contact"];
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

function openCountry(data, options = {}) {
  const countryHero = document.getElementById("countryHero");
  countryHero.src = data.image;
  countryHero.alt = `${data.name} destination image`;
  countryHero.classList.toggle("country-flag-hero", data.image.includes("flagcdn.com"));
  document.getElementById("countryTitleLabel").textContent = `${data.name} ${data.flag || ""}`.trim();
  document.getElementById("countryWhy").textContent = data.why;
  document.getElementById("countryScholarships").textContent = data.scholarships;
  document.getElementById("countryWork").textContent = data.work;
  document.getElementById("countryStability").textContent = data.stability;
  document.getElementById("countryLife").textContent = data.life;
  document.getElementById("embassyProcess").innerHTML = renderEmbassyProcess();
  const universityGrid = document.getElementById("universityGrid");
  universityGrid.innerHTML = data.unis.map(([name, desc]) => `<article class="card country-university-card"><h5>${name}</h5><p>${desc}</p></article>`).join("");
  countryBackToList.classList.toggle("hidden", !options.fromExtraList);
  const detailCards = countryModal.querySelectorAll(".destination-detail-card");
  detailCards.forEach((card, index) => card.style.setProperty("--detail-stagger", `${80 + index * 90}ms`));
  openModal(countryModal);
  countryModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" });
  if (window.gsap) {
    gsap.fromTo("#countryModal .destination-modal-content", { opacity: 0, y: 18, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "expo.out" });
    gsap.fromTo("#countryModal .modal-hero, #countryModal .destination-detail-card", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.65, ease: "expo.out", stagger: 0.09, delay: 0.08 });
  }
}
function openLegal(title, bodyHtml) { document.getElementById("legalTitle").textContent = title; document.getElementById("legalBody").innerHTML = bodyHtml; openModal(legalModal); }
function openSearch() { openModal(searchModal); renderSearchResults(""); setTimeout(() => searchInput.focus(), 50); }
function attachFallback(img) {
  if (img.matches(".site-logo-img,[data-logo-img]")) return;
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied === "1") return;
    img.dataset.fallbackApplied = "1";
    img.src = fallbackSvg;
  });
}
function setupLogoFallbacks() {
  const logoImages = document.querySelectorAll(".site-logo-img, [data-logo-img]");
  logoImages.forEach((img) => {
    img.addEventListener("error", () => {
      const wrapper = img.closest(".site-logo");
      if (!wrapper || img.dataset.logoFallbackApplied === "1") return;
      img.dataset.logoFallbackApplied = "1";
      img.style.display = "none";
      wrapper.classList.add("logo-failed");
      const fallback = wrapper.querySelector(".logo-fallback");
      if (fallback) fallback.setAttribute("aria-hidden", "false");
    });
  });
}
function renderDestinations() {
  destinationGrid.innerHTML = "";
  destinations.forEach((d, index) => {
    const node = destinationTemplate.content.cloneNode(true);
    const article = node.querySelector(".destination");
    article.classList.add("motion-card", "scroll-reveal");
    const img = node.querySelector("img");
    article.dataset.country = d.key;
    if (index === 0 || index === 3) article.classList.add("span-2");
    img.src = d.image;
    img.alt = d.key === "austria" ? "Innsbruck, Austria mountain city view" : d.key === "china" ? "China city skyline and landmark view" : `${d.name} destination`;
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
function renderMoreCountries() {
  moreCountriesList.classList.add("more-countries-list");
  moreCountriesList.innerHTML = extraCountries.map((country) => `<button class="country-list-btn motion-card" type="button" data-country="${country.key}"><span>${country.flag} ${country.name}</span><small>${country.region}</small></button>`).join("");
}
function startImpactCarousel() {
  if (!impactCarousel) return;
  const slides = impactCarousel.querySelectorAll(".impact-slide");
  if (!slides.length) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 6000);
}
function renderTestimonials() {
  const uniqueCards = testimonials.map((t) => {
    const node = testimonialTemplate.content.cloneNode(true);
    const article = node.querySelector(".testimonial");
    article.classList.add("motion-card");
    const img = node.querySelector("img");
    img.src = t.img;
    img.alt = `${t.name} portrait`;
    attachFallback(img);
    node.querySelector("strong").textContent = t.name;
    node.querySelector(".muted").textContent = t.country;
    node.querySelector("p").textContent = t.q;
    return article.outerHTML;
  }).join("");
  const cards = uniqueCards + uniqueCards;
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
function applyMotionClasses() {
  document.querySelectorAll(".section-title").forEach((el) => {
    el.classList.add("scroll-reveal");
    el.parentElement?.classList.add("motion-mask");
  });
  document.querySelectorAll(".about-copy, .guarantee").forEach((el) => el.classList.add("scroll-reveal"));
  document.querySelectorAll(".service, .more-services, .step, .faq-item, .pricing-card, .group-offer-card, .blog-card").forEach((el) => el.classList.add("motion-card", "scroll-reveal"));
  document.querySelectorAll(".impact-slide").forEach((el) => el.classList.add("motion-card"));
  document.querySelectorAll(".testimonial").forEach((el) => el.classList.add("motion-card"));
  document.querySelectorAll(".about-founder-card").forEach((el) => el.classList.add("motion-card", "scroll-reveal"));
  document.querySelectorAll(".btn:not(.icon-btn), .article-back-btn, .group-cta-button").forEach((el) => el.classList.add("motion-button"));
  document.querySelectorAll(".modal-shell").forEach((el) => el.classList.add("motion-modal"));
}
function revealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal, .scroll-reveal");
  if (!revealItems.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in", "is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });
  revealItems.forEach((el) => observer.observe(el));
}

const APPLICATION_DOCUMENTS_BUCKET = "application-documents";
const MAX_APPLICATION_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_APPLICATION_MIME_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);
const ALLOWED_APPLICATION_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png"]);
const APPLICATION_DOCUMENT_FIELDS = {
  gradeExams: {
    label: "Grade 10 and 12 National Exams",
    column: "grade_10_12_exam_path",
    folder: "grade-exams"
  },
  highSchoolTranscript: {
    label: "High School Transcript",
    column: "high_school_transcript_path",
    folder: "high-school-transcripts"
  },
  passport: {
    label: "Passport",
    column: "passport_path",
    folder: "passports"
  },
  bachelorDegreeCertificate: {
    label: "Bachelor Degree Certificate",
    column: "bachelor_degree_certificate_path",
    folder: "bachelor-certificates"
  },
  bachelorTranscript: {
    label: "Bachelor Transcript or Student Copy",
    column: "bachelor_transcript_path",
    folder: "bachelor-transcripts"
  }
};

function setApplicationFormMessage(type, message) {
  const messageEl = document.getElementById("applicationFormMessage");
  if (!messageEl) return;
  messageEl.textContent = message || "";
  messageEl.classList.remove("is-success", "is-error");
  if (type && message) messageEl.classList.add(type === "success" ? "is-success" : "is-error");
}

function getFieldValue(form, name) {
  return String(form.elements[name]?.value || "").trim();
}

function getApplicationRequiredDocuments(level) {
  const baseDocuments = ["highSchoolTranscript", "passport"];
  if (level === "Bachelor") return ["gradeExams", ...baseDocuments];
  if (level === "Masters") return ["bachelorDegreeCertificate", "bachelorTranscript", ...baseDocuments];
  return baseDocuments;
}

function getFileExtension(file) {
  return file.name.split(".").pop()?.toLowerCase() || "";
}

function validateApplicationFileInput(input, documentConfig) {
  if (!input || !input.files || input.files.length === 0) {
    return { error: `${documentConfig.label} is required.` };
  }

  if (input.files.length > 1) {
    return { error: "Please upload one combined PDF or one image per document field." };
  }

  const file = input.files[0];
  const extension = getFileExtension(file);
  if (!ALLOWED_APPLICATION_MIME_TYPES.has(file.type) || !ALLOWED_APPLICATION_EXTENSIONS.has(extension)) {
    return { error: `${documentConfig.label} must be a PDF, JPG, JPEG, or PNG file.` };
  }

  return { file, extension };
}

function validateApplicationForm(form) {
  const fullName = getFieldValue(form, "fullName");
  const email = getFieldValue(form, "email");
  const phone = getFieldValue(form, "phone");
  const secondaryPhone = getFieldValue(form, "secondaryPhone");
  const applicationLevel = getFieldValue(form, "level");
  const applicationArea = getFieldValue(form, "field");
  const countriesInterested = getFieldValue(form, "countries");
  const heardAboutUs = getFieldValue(form, "source");
  const emailInput = form.elements.email;
  const phonePattern = /^[0-9+\-()\s]+$/;
  const simpleEmailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!fullName || !email || !phone || !applicationLevel || !applicationArea || !countriesInterested || !heardAboutUs) {
    return { error: "Please complete all required fields before submitting." };
  }

  if (!emailInput.validity.valid || !simpleEmailPattern.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!phonePattern.test(phone) || (secondaryPhone && !phonePattern.test(secondaryPhone))) {
    return { error: "Please enter a valid phone number using digits, spaces, +, -, or parentheses." };
  }

  const requiredDocumentNames = getApplicationRequiredDocuments(applicationLevel);
  const fileUploads = [];
  let totalSize = 0;

  for (const documentName of requiredDocumentNames) {
    const documentConfig = APPLICATION_DOCUMENT_FIELDS[documentName];
    const input = form.querySelector(`[name="${documentName}"]`);
    const result = validateApplicationFileInput(input, documentConfig);
    if (result.error) return { error: result.error };
    totalSize += result.file.size;
    fileUploads.push({ ...documentConfig, file: result.file, extension: result.extension });
  }

  if (totalSize > MAX_APPLICATION_FILE_BYTES) {
    return { error: "Maximum combined file size should stay below 10MB." };
  }

  return {
    payload: {
      full_name: fullName,
      email,
      phone,
      secondary_phone: secondaryPhone || null,
      application_level: applicationLevel,
      application_area: applicationArea,
      countries_interested: countriesInterested,
      heard_about_us: heardAboutUs,
      status: "new"
    },
    fileUploads
  };
}

function buildApplicationStoragePath(folder, extension) {
  return `${folder}/${crypto.randomUUID()}.${extension}`;
}

async function uploadApplicationDocument({ file, folder, extension }) {
  const path = buildApplicationStoragePath(folder, extension);
  const { data, error } = await supabase.storage
    .from(APPLICATION_DOCUMENTS_BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type
    });

  if (error) throw error;
  return data.path;
}

async function handleConsultFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  setApplicationFormMessage("", "");

  const validation = validateApplicationForm(form);
  if (validation.error) {
    setApplicationFormMessage("error", validation.error);
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    const payload = { ...validation.payload };
    for (const upload of validation.fileUploads) {
      payload[upload.column] = await uploadApplicationDocument(upload);
    }

    const { error } = await supabase
      .from("applications")
      .insert([payload]);

    if (error) throw error;

    form.reset();
    dynamicUploads.innerHTML = "";
    setApplicationFormMessage("success", "Application submitted successfully. Our team will contact you soon.");
  } catch (error) {
    console.error(error);
    setApplicationFormMessage("error", "Submission failed. Please check your connection and try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
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
  if (themeToggle) themeToggle.addEventListener("click", () => applyThemePreference(body.classList.contains("dark-theme") ? "light" : "dark"));
  document.getElementById("searchOpenMobile").addEventListener("click", () => { closeMenu(); openSearch(); });
  document.getElementById("moreCountriesOpen").addEventListener("click", () => { moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" }); openModal(moreCountriesModal); });
  countryBackToList.addEventListener("click", () => { closeModal(countryModal); openModal(moreCountriesModal); moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" }); });
  document.querySelectorAll(".mobile-link").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => closeModal(document.getElementById(btn.dataset.close))));
  document.getElementById("termsOpen").addEventListener("click", () => openLegal("Terms of Service", `<section><h3>Terms of Service</h3><p>These Terms explain how Broad Mobility delivers visa, education, and travel support services. By using this website or booking support, you agree to these terms.</p></section><section><h4>1) Scope of Services</h4><p>Broad Mobility provides advisory support including consultations, document preparation guidance, interview coaching, travel planning assistance, and general destination information.</p></section><section><h4>2) Eligibility</h4><p>Clients must be legally permitted to apply for their selected program, visa, or travel category and must provide truthful personal and supporting information.</p></section><section><h4>3) Client Responsibilities</h4><p>Clients are responsible for attending meetings, submitting requested records on time, and reviewing all documents before submission to any embassy, school, or third party.</p></section><section><h4>4) Accuracy of Information</h4><p>All outcomes depend on accurate information. Inconsistent, altered, or incomplete records can delay processing or lead to refusal by authorities.</p></section><section><h4>5) Consultation and Advisory Nature</h4><p>Broad Mobility is an advisory consultancy. We prepare and guide, but we do not guarantee approvals because final decisions are made by independent institutions.</p></section><section><h4>6) Fees and Payments</h4><p>Published service plans describe support level and scope. Where fees apply, clients are informed before onboarding. Government or embassy fees are separate unless clearly stated.</p></section><section><h4>7) Third-Party Decisions</h4><p>Embassies, universities, scholarship boards, and border authorities make independent decisions. Broad Mobility cannot override, influence, or reverse those decisions.</p></section><section><h4>8) Timelines and Expectations</h4><p>Processing timelines vary by country, intake, season, and document readiness. Shared timelines are planning estimates, not guaranteed processing dates.</p></section><section><h4>9) Refund, Cancellation, and Rescheduling</h4><p>Consultation slots may be rescheduled with notice. Service fees already used for delivered work or reviews may be non-refundable based on completed scope.</p></section><section><h4>10) Intellectual Property</h4><p>All website content, guidance templates, and branded materials remain the property of Broad Mobility unless otherwise stated.</p></section><section><h4>11) Acceptable Use</h4><p>You agree not to misuse forms, upload harmful files, impersonate others, or use our materials for unlawful activities.</p></section><section><h4>12) Limitation of Liability</h4><p>Broad Mobility is not liable for indirect losses caused by third-party decisions, policy changes, client delays, or inaccurate client-provided information.</p></section><section><h4>13) Indemnification</h4><p>Clients agree to indemnify Broad Mobility against claims arising from falsified records, unauthorized use, or misuse of advisory materials.</p></section><section><h4>14) Privacy Reference</h4><p>Personal information is handled under our Privacy Policy. Please review it for details on data collection, processing, and retention.</p></section><section><h4>15) Service and Term Updates</h4><p>Broad Mobility may update services, terms, and published offers to reflect operational or legal changes. Updated terms apply once posted.</p></section><section><h4>16) Support and Customer Contact</h4><p>For service clarifications, plan scope, or complaint resolution, contact our support team and include your full name and service reference.</p></section><section><h4>17) Contact Information</h4><p>Legal and support inquiries: scelta.infinity@gmail.com.</p></section>`));
  document.getElementById("privacyOpen").addEventListener("click", () => openLegal("Privacy Policy", `<section><h3>Privacy Policy</h3><p>This Policy explains how Broad Mobility collects, uses, stores, and protects personal information shared through this website and our consultation services.</p></section><section><h4>1) Introduction</h4><p>We are committed to responsible data handling and only collect information necessary for service delivery, communication, and compliance.</p></section><section><h4>2) Information We Collect</h4><p>We may collect contact details, education/work background, destination interests, uploaded records, and consultation notes.</p></section><section><h4>3) How We Use Information</h4><p>Data is used to assess eligibility pathways, deliver advisory guidance, prepare documentation checklists, and communicate updates.</p></section><section><h4>4) Consultation and Service Delivery Data</h4><p>Consultation records may include action plans, timeline recommendations, and document feedback to improve delivery quality and continuity.</p></section><section><h4>5) Cookies and Technical Data</h4><p>We may use basic technical logs or analytics signals (such as browser type and page interactions) to improve site usability and reliability.</p></section><section><h4>6) Document Handling</h4><p>Uploaded files are used only for advisory and preparation support. Clients should avoid sharing unrelated sensitive records not required for service scope.</p></section><section><h4>7) Sharing with Trusted Partners</h4><p>Where necessary, information may be shared with trusted service partners or official channels strictly for client-requested processing steps.</p></section><section><h4>8) Data Retention</h4><p>Information is retained only for active services, recordkeeping, legal obligations, or quality control, then securely deleted or archived.</p></section><section><h4>9) Security Measures</h4><p>Broad Mobility applies reasonable technical and operational safeguards to reduce unauthorized access, disclosure, or misuse risks.</p></section><section><h4>10) User Rights</h4><p>You may request access, correction, or deletion of eligible personal data by contacting us. Some records may be retained where required by law.</p></section><section><h4>11) International Users</h4><p>Clients using our services across borders acknowledge that processing may involve data handling relevant to destination-country procedures.</p></section><section><h4>12) Third-Party Links</h4><p>Our site may link to third-party platforms. We are not responsible for external privacy practices and recommend reviewing those policies directly.</p></section><section><h4>13) Updates to This Policy</h4><p>We may revise this Policy as services evolve. Updated versions apply from the date of publication on our website.</p></section><section><h4>14) Contact Information</h4><p>Privacy inquiries: scelta.infinity@gmail.com.</p></section>`));
  document.getElementById("appLevel").addEventListener("change", (e) => {
    const v = e.target.value;
    if (v === "Bachelor") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Grade 10 and 12 National Exams<input type="file" name="gradeExams" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else if (v === "Masters") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Degree Certificate<input type="file" name="bachelorDegreeCertificate" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" style="display:block;margin-top:10px;width:100%;color:#fff"></label><label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Transcript or Student Copy<input type="file" name="bachelorTranscript" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else dynamicUploads.innerHTML = "";
  });
  document.getElementById("consultForm").addEventListener("submit", handleConsultFormSubmit);
  document.addEventListener("click", (e) => {
    if (e.target === consultModal) closeModal(consultModal);
    if (e.target === countryModal) closeModal(countryModal);
    if (e.target === moreCountriesModal) closeModal(moreCountriesModal);
    if (e.target === legalModal) closeModal(legalModal);
    if (e.target === searchModal) closeModal(searchModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeModal(consultModal);
      closeModal(countryModal);
      closeModal(moreCountriesModal);
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
  moreCountriesList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-country]");
    if (!btn) return;
    const country = allCountriesMap.get(btn.dataset.country);
    if (!country) return;
    openCountry(country, { fromExtraList: true });
    closeModal(moreCountriesModal);
  });

  const tabPersonal = document.getElementById("tabPersonal");
  const tabGroup = document.getElementById("tabGroup");
  const panelPersonal = document.getElementById("panelPersonal");
  const panelGroup = document.getElementById("panelGroup");
  if (tabPersonal && tabGroup && panelPersonal && panelGroup) {
    const activateTab = (key) => {
      const personal = key === "personal";
      tabPersonal.classList.toggle("active", personal);
      tabGroup.classList.toggle("active", !personal);
      tabPersonal.setAttribute("aria-selected", personal ? "true" : "false");
      tabGroup.setAttribute("aria-selected", personal ? "false" : "true");
      panelPersonal.classList.toggle("hidden", !personal);
      panelGroup.classList.toggle("hidden", personal);
    };
    tabPersonal.addEventListener("click", () => activateTab("personal"));
    tabGroup.addEventListener("click", () => activateTab("group"));
  }
}



function animateHeroIntro() {
  if (document.querySelector(".hero-title-motion")) return;
  const heroItems = document.querySelectorAll(".hero-badge, .hero-title, .hero-subtitle, .hero-actions, .hero-ticker, .hero-stat-card");
  if (!heroItems.length || heroItems[0].classList.contains("motion-reveal") || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.from(".hero-title", { opacity: 0, y: 24, duration: 1.2, ease: "expo.out" });
  gsap.from(".hero-subtitle", { opacity: 0, y: 22, duration: 1.1, ease: "expo.out", delay: 0.12 });
  gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 1.0, ease: "expo.out", delay: 0.22 });
  gsap.from(".hero-stat-card, .stat", { opacity: 0, y: 22, duration: 1.15, ease: "expo.out", stagger: 0.09, delay: 0.28 });
  gsap.from(".hero-badge, .hero-ticker", { opacity: 0, y: 18, duration: 1.0, ease: "expo.out", stagger: 0.08, delay: 0.08 });
  gsap.from(".hero-title", { letterSpacing: "0.01em", duration: 1.2, ease: "expo.out" });
}

function startProcessNumberCycle() {
  const processNumbers = document.querySelectorAll(".process-number, .step-circle");
  if (!processNumbers.length) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeProcessIndex = 0;
  const activateProcessNumber = () => {
    processNumbers.forEach((item) => item.classList.remove("is-active"));
    const activeItem = processNumbers[activeProcessIndex];
    if (activeItem) activeItem.classList.add("is-active");
    activeProcessIndex = (activeProcessIndex + 1) % processNumbers.length;
  };
  activateProcessNumber();
  if (!prefersReducedMotion) window.setInterval(activateProcessNumber, 1800);
}

function syncMenuScroll() { setHeaderState(); setActiveNav(); }
function init() {
  initThemeToggle();
  setupLogoFallbacks();
  animateHeroIntro();
  renderDestinations();
  renderMoreCountries();
  renderTestimonials();
  applyMotionClasses();
  startImpactCarousel();
  startProcessNumberCycle();
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
